package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    Product createAccount (Product product);

    String updateAccount (Product product);

    String deleteAccount (Long idProduct);

    List<Product> listAccounts();

    Optional<Product> getAccount(Long idProduct);

}
