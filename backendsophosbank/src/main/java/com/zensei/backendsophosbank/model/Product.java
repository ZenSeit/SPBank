package com.zensei.backendsophosbank.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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

    @ManyToOne
    private User owner;

    private String state;
    private double balance;
    private double availableBalance;
    private boolean exceptionGMF;
    private LocalDate createdAt;
    private LocalDate modifiedAt;
    private LocalDate deletedAt;

    @ManyToOne
    private User modifiedBy;

}
