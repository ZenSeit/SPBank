package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.repository.ProductRepository;
import com.zensei.backendsophosbank.utils.UAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Repository
@RequiredArgsConstructor
public class ProductService implements IProductService{

    private final ProductRepository pRepository;

    @Override
    public Product createAccount(Product product) {
        product.setAccountNumber(UAccount.serialAccount(product.getAccountType()));
        return pRepository.save(product);
    }

    @Override
    public String updateAccount(Product product) {
        return null;
    }

    @Override
    public String deleteAccount(Long idProduct) {
        return null;
    }

    @Override
    public List<Product> listAccounts() {
        return null;
    }

    @Override
    public Optional<Product> getAccount(Long idProduct) {
        return pRepository.findById(idProduct);
    }
}
