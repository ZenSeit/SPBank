package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;

import java.util.List;

public class StatementProductService implements IStatementProductService{

    @Override
    public List<StatementProduct> getStatementsByOwner(Product product) {
        return null;
    }

    @Override
    public String creditToProduct(StatementProduct stProduct) {
        return null;
    }
}
