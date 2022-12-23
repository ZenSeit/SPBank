package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    Product createAccount (Product product) throws ProductConstraint, RecordNotFound;

    String updateAccount (Product product) throws RecordNotFound, ProductConstraint;

    String deleteAccount (Long idProduct) throws RecordNotFound;

    List<Product> listAccounts();

    List<Product> listAccountsByOwner(Long owner) throws RecordNotFound;

    Optional<Product> getAccount(Long idProduct);

}
