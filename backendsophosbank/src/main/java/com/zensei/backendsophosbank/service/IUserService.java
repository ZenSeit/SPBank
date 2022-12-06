package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.User;

import java.util.Optional;

public interface IUserService {

    String saveUser(User user);

    Optional<User> getUser(Long idUser);
}
