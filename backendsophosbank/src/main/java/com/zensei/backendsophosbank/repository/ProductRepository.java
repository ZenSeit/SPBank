package com.zensei.backendsophosbank.repository;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("Select count(*) from Product where owner=:owner and not state='cancelled'")
    Long countActiveAccounts(@Param("owner") User us);

    @Query("Select count(*) from Product where owner=:owner and exceptionGMF=true")
    Long countIsGMFPresent(@Param("owner") User us);

    List<Product> findByOwnerOrderByAvailableBalanceDesc(User owner);
}
