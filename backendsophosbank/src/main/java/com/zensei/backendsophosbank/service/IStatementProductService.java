package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;

import java.util.List;

public interface IStatementProductService {

    List<StatementProduct> getStatementsByOwner(Product product);

    String creditToProduct(StatementProduct stProduct);

}
