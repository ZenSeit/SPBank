package com.zensei.backendsophosbank.model;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;

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
    private String idType;
    private String idNumber;
    private String names;
    private String lastNames;
    private LocalDate birthDate;
    @Column(nullable = false, unique = true)
    @NotNull(message = "Email is missing")
    @Pattern(regexp = "^[a-z0-9]+(?:[._][a-z0-9]+)*@(?:\\w+\\.)+\\w{2,5}$",message = "Email format isn't correct. Type a valid email = abc@email.com")
    private String email;
    private String password;
    private String rol;
    @CreationTimestamp
    private LocalDate createdAt;
    private LocalDate deletedAt;
    @UpdateTimestamp
    private LocalDate modifiedAt;
    //private User modifiedBy;

}
