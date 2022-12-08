package com.zensei.backendsophosbank.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountType;
    @Column(nullable = false, length = 10)
    private String accountNumber;

    //@ManyToOne
    private User owner;

    private String state;
    private double balance;
    private double availableBalance;
    private boolean exceptionGMF;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
    private LocalDate deletedAt;
    private User modifiedBy;

}
