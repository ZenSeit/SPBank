package com.zensei.backendsophosbank.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.*;

import java.time.LocalDate;
import java.util.Set;

@Check(constraints = "balance>=0 and account_type='saving' OR balance>=-3000000 and account_type='checking'")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Entity
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Where(clause = "deleted_at is null")
@SQLDelete(sql = "UPDATE users SET deleted_at=now() WHERE id = ?")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String accountType="saving";
    @Column(nullable = false, length = 10, unique = true)
    private String accountNumber;

    @ManyToOne
    private User owner;

    private String state="active";
    private double balance;
    private double availableBalance;
    private boolean exceptionGMF;
    @CreationTimestamp
    private LocalDate createdAt;
    @UpdateTimestamp
    private LocalDate modifiedAt;
    private LocalDate deletedAt;

    @ManyToOne
    private User modifiedBy;

    @JsonIgnore
    @OneToMany(mappedBy = "statementOwner")
    private Set<StatementProduct> myStatements;

}
