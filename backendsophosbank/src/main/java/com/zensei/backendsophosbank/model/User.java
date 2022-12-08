package com.zensei.backendsophosbank.model;




import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.util.Set;


@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String idType = "CC";
    @Column(nullable = false, length = 16)
    private String idNumber;
    @Column(nullable = false, length = 100)
    private String names;
    @Column(nullable = false, length = 100)
    private String lastNames;
    @Column(nullable = false)
    private LocalDate birthDate;
    @Column(nullable = false, unique = true , length = 100)
    @NotNull(message = "Email is missing")
    @Pattern(regexp = "^[a-z0-9]+(?:[._][a-z0-9]+)*@(?:\\w+\\.)+\\w{2,5}$",message = "Email format isn't correct. Type a valid email = abc@email.com")
    private String email;
    private String password;
    @Column(length = 10)
    private String rol="client";
    @CreationTimestamp
    private LocalDate createdAt;
    private LocalDate deletedAt;
    @UpdateTimestamp
    private LocalDate modifiedAt;

    @OneToMany(mappedBy = "owner")
    private Set<Product> myProducts;

    @OneToMany(mappedBy = "modifiedBy")
    private Set<Product> myProductsEdit;

}
