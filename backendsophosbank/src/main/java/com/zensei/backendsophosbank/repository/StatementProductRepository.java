package com.zensei.backendsophosbank.repository;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.StatementProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StatementProductRepository extends JpaRepository<StatementProduct,Long> {

    List<StatementProduct> findByStatementOwnerOrderByTransactionDateDesc(Optional<Product> owner);
}
