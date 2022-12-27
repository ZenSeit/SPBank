package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;
import com.zensei.backendsophosbank.repository.ProductRepository;
import com.zensei.backendsophosbank.repository.StatementProductRepository;
import com.zensei.backendsophosbank.utils.UAccount;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
@Repository
@RequiredArgsConstructor
public class StatementProductService implements IStatementProductService{

    private final StatementProductRepository spRepository;

    private final ProductRepository pRepository;

    @Override
    public List<StatementProduct> getStatementsByOwner(Long id) throws RecordNotFound {
        Optional<Product> product=pRepository.findById(id);
        if (product.isEmpty()) throw new RecordNotFound("Account doesn't exist!");
        return spRepository.findByStatementOwner(product);
    }

    @Transactional(rollbackOn = { SQLException.class })
    @Override
    public String creditToProduct(StatementProduct stProduct, Long id) throws RecordNotFound {

        stProduct.setStatementType("Credit");
        stProduct.setTransactiontType("Pay-in");

        Optional<Product> payInProduct=pRepository.findByIdNotCancelled(id);

        if(payInProduct.isEmpty()) throw new RecordNotFound("Account doesn't exist! or is cancelled");

        operationCredit(payInProduct.get(),stProduct,"Pay-in");

        return "Pay-in account "+stProduct.getStatementOwner().getAccountNumber()+" successfully";
    }

    @Transactional(rollbackOn = { SQLException.class })
    @Override
    public String debitFromProduct(StatementProduct stProduct, Long id) throws RecordNotFound, ProductConstraint {

        stProduct.setStatementType("Debit");
        stProduct.setTransactiontType("withdrawal");

        Optional<Product> withdrawal=pRepository.findByIdNotCancelled(id);

        if(withdrawal.isEmpty()) throw new RecordNotFound("Account doesn't exist! or is cancelled");

        operationDebit(withdrawal.get(),stProduct,"ATM");

        return "Debit from "+withdrawal.get().getAccountNumber()+" Value: $"+stProduct.getTransactionValue();
    }

    @Transactional(rollbackOn = { SQLException.class })
    @Override
    public String transferToAccount(Long idFrom, String idTo, StatementProduct stProduct) throws RecordNotFound, ProductConstraint {

        Optional<Product> fromAccount=pRepository.findByIdNotCancelled(idFrom);
        Optional<Product> toAccount = pRepository.findByAccountNumber(idTo);

        if(fromAccount.isEmpty()) throw new RecordNotFound("Account from you want to execute this operation doesn't exist or is cancelled!");
        if(toAccount.isEmpty() || toAccount.get().getState().equalsIgnoreCase("cancelled")) throw new RecordNotFound("Target account does not exist or is cancelled");

        if(fromAccount.get().getAccountNumber().equalsIgnoreCase(toAccount.get().getAccountNumber())) throw new ProductConstraint("You cannot transfer to the same account");

        StatementProduct stProductTo = new StatementProduct();
        stProductTo.setTransactionValue(stProduct.getTransactionValue());

        operationDebit(fromAccount.get(),stProduct,"Money sent to "+toAccount.get().getAccountNumber());
        operationCredit(toAccount.get(),stProductTo,"Account "+fromAccount.get().getAccountNumber()+" sent you money");

        return "Transfer successful";
    }

    private void operationDebit(Product withdrawal, StatementProduct stProduct, String description) throws ProductConstraint {

        if(withdrawal.getState().equalsIgnoreCase("inactive")) throw new ProductConstraint("You can´t debit from an inactive account");

        UAccount.checkBalanceOperation(withdrawal,stProduct.getTransactionValue());

        UAccount.applyGMF(withdrawal);

        stProduct.setBalance(withdrawal.getBalance());
        stProduct.setAvailableBalance(withdrawal.getAvailableBalance());
        stProduct.setDescription(description);
        stProduct.setStatementOwner(withdrawal);
        stProduct.setTransactionValue(Math.abs(stProduct.getTransactionValue()));
        stProduct.setStatementType("Debit");
        stProduct.setTransactiontType("withdrawal");

        pRepository.save(withdrawal);

        spRepository.save(stProduct);
    }

    private void operationCredit(Product payInProduct,StatementProduct stProduct, String description){

        payInProduct.setBalance(payInProduct.getBalance()+Math.abs(stProduct.getTransactionValue()));

        UAccount.applyGMF(payInProduct);

        stProduct.setBalance(payInProduct.getBalance());
        stProduct.setAvailableBalance(payInProduct.getAvailableBalance());
        stProduct.setDescription(description);
        stProduct.setStatementOwner(payInProduct);
        stProduct.setStatementType("Credit");
        stProduct.setTransactiontType("Pay-in");

        pRepository.save(payInProduct);

        spRepository.save(stProduct);
    }


}
