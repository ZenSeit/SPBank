package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.repository.ProductRepository;
import com.zensei.backendsophosbank.repository.UserRepository;
import com.zensei.backendsophosbank.utils.UAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Repository
@RequiredArgsConstructor
public class ProductService implements IProductService{

    private final ProductRepository pRepository;

    private final UserRepository uRepository;

    @Override
    public Product createAccount(Product product) throws ProductConstraint, RecordNotFound {

        Optional<User> owner = uRepository.findById(product.getOwner().getId());
        Optional<User> modifier = uRepository.findById(product.getModifiedBy().getId());
        if (owner.isEmpty() || modifier.isEmpty()) throw new RecordNotFound("User isn't in DB!");
        String AccountNumberTemp;

        Optional<Product> verifiedUniqueAccount;
        do {
            AccountNumberTemp = UAccount.serialAccount(product.getAccountType());
            verifiedUniqueAccount = pRepository.findByAccountNumber(AccountNumberTemp);
        } while (verifiedUniqueAccount.isPresent());

        product.setAccountNumber(AccountNumberTemp);

        if (pRepository.countIsGMFPresent(product.getOwner()) > 0 && product.isExceptionGMF())
            throw new ProductConstraint("User have a GMF exception account already!");
        product.setBalance(Math.abs(product.getBalance()));
        UAccount.applyGMF(product);
        //UAccount.checkBalance(product);
        return pRepository.save(product);
    }

    @Override
    public String updateAccount(Product product) throws RecordNotFound, ProductConstraint {

        Optional<Product> updateProduct = pRepository.findById(product.getId());
        if(updateProduct.isEmpty()) throw new RecordNotFound("Account not exist in our system");

        if(product.getState()==0){
            if(updateProduct.get().getBalance()<0 || updateProduct.get().getBalance()>1){
                throw new ProductConstraint("You cannot cancelled this account until its balance is 0!");
            }
        }
        if(product.getState()>=0 && product.getState()<=2) updateProduct.get().setState(product.getState());

        if(!updateProduct.get().isExceptionGMF()){
            if(pRepository.countIsGMFPresent(updateProduct.get().getOwner())>0 && product.isExceptionGMF()) throw new ProductConstraint("User have a GMF exception account already!");

        }

        updateProduct.get().setExceptionGMF(product.isExceptionGMF());

        if(product.getState()==0) updateProduct.get().setExceptionGMF(false);

        UAccount.applyGMF(updateProduct.get());

        pRepository.save(updateProduct.get());

        return "Account was updated!";
    }

    @Override
    public String deleteAccount(Long idProduct) throws RecordNotFound {

        Optional<Product> myProduct = pRepository.findById(idProduct);
        if(myProduct.isEmpty()) throw new RecordNotFound("User isn't DB!");
        pRepository.deleteById(idProduct);
        return "Account was deleted from our system";
    }

    @Override
    public List<Product> listAccounts() {
        return pRepository.findAll();
    }

    @Override
    public List<Product> listAccountsByOwner(Long owner) throws RecordNotFound {

        Optional<User> ownerProduct = uRepository.findById(owner);

        if(ownerProduct.isEmpty()) throw new RecordNotFound("User doesn't exist!");

        return pRepository.findByOwnerOrderByStateDescAvailableBalanceDesc(ownerProduct.get());
    }


    @Override
    public Optional<Product> getAccount(Long idProduct) {
        return pRepository.findById(idProduct);
    }

}
