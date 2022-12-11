package com.zensei.backendsophosbank.service;

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

    @Transactional
    @Override
    public String creditToProduct(StatementProduct stProduct) throws RecordNotFound {
        stProduct.setStatementType("Credit");
        stProduct.setTransactiontType("Pay-in");

        Optional<Product> PayInProduct=pRepository.findById(stProduct.getStatementOwner().getId());

        if(PayInProduct.isEmpty()) throw new RecordNotFound("Account doesn't exist!");

        PayInProduct.get().setBalance(PayInProduct.get().getBalance()+Math.abs(stProduct.getTransactionValue()));

        UAccount.applyGMF(PayInProduct.get());

        stProduct.setBalance(PayInProduct.get().getBalance());
        stProduct.setAvailableBalance(PayInProduct.get().getAvailableBalance());
        stProduct.setDescription("Pay-in");
        stProduct.setStatementOwner(PayInProduct.get());

        pRepository.save(PayInProduct.get());

        spRepository.save(stProduct);

        return "Pay-in account "+stProduct.getStatementOwner().getAccountNumber()+" successfully";
    }
}
