package com.zensei.backendsophosbank.repository;

import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Long> {

    @Query("Select count(*) from Product where owner=:owner and not state='cancelled'")
    Long countActiveAccounts(@Param("owner") User us);

    @Query("From Product where id=:id and not state='cancelled'")
    Optional<Product> findByIdNotCancelled(Long id);

    @Query("Select count(*) from Product where owner=:owner and exceptionGMF=true")
    Long countIsGMFPresent(@Param("owner") User us);

    List<Product> findByOwnerOrderByStateDescAvailableBalanceDesc(User owner);

    Optional<Product> findByAccountNumber(String AccountNumber);
}
