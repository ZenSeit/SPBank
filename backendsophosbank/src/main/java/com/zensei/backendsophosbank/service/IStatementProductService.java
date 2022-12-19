package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;

import java.util.List;

public interface IStatementProductService {

    List<StatementProduct> getStatementsByOwner(Long idAccount) throws RecordNotFound;

    String creditToProduct(StatementProduct stProduct,Long id) throws RecordNotFound;

    String debitFromProduct(StatementProduct stProduct,Long id) throws RecordNotFound, ProductConstraint;

    String transferToAccount(Long idFrom, Long idTo, StatementProduct stProduct) throws RecordNotFound, ProductConstraint;

}
