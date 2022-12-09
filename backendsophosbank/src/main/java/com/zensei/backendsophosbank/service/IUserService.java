package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstrains;
import com.zensei.backendsophosbank.model.User;

import java.util.Optional;

public interface IUserService {

    String saveUser(User user) throws UserConstrains;
    Optional<User> getUser(Long idUser);
    String modifyUser(User user) throws RecordNotFound;
    String deleteUser(Long idUser) throws RecordNotFound, UserConstrains;
}
