package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;

import java.util.List;

public interface IStatementProductService {

    List<StatementProduct> getStatementsByOwner(Long idAccount) throws RecordNotFound;

    String creditToProduct(StatementProduct stProduct) throws RecordNotFound;

}
