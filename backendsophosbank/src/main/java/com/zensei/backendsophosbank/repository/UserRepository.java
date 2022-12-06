package com.zensei.backendsophosbank.repository;

import com.zensei.backendsophosbank.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
