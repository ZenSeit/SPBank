package com.zensei.backendsophosbank.model;




import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.Where;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Set;


@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Where(clause = "deleted_at is null")
@SQLDelete(sql = "UPDATE users SET deleted_at=now() WHERE id = ?")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 4)
    private String idType;
    @Column(nullable = false, length = 16,unique = true)
    private String idNumber;
    @Pattern(regexp ="^[a-zA-Z ]{2,}$", message = "This field must have at least 2 characters.")
    @Column(nullable = false, length = 100)
    private String names;
    @Pattern(regexp ="^[a-zA-Z ]{2,}$", message = "This field must have at least 2 characters.")
    @Column(nullable = false, length = 100)
    private String lastNames;
    @Column(nullable = false)
    private LocalDate birthDate;

    @Column(nullable = false, unique = true , length = 100)
    @NotNull(message = "Email is missing")
    @Pattern(regexp = "^[a-z0-9]+(?:[._][a-z0-9]+)*@(?:\\w+\\.)+\\w{2,5}$",message = "Email format isn't correct. Type a valid email = abc@email.com")
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @Column(length = 10)
    private String rol="client";
    @CreationTimestamp
    private LocalDateTime createdAt;
    private LocalDateTime deletedAt;
    @UpdateTimestamp
    private LocalDateTime modifiedAt;

    @JsonIgnore
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private Set<Product> myProducts;

    @JsonIgnore
    @OneToMany(mappedBy = "modifiedBy", fetch = FetchType.LAZY)
    private Set<Product> myProductsEdit;


}
