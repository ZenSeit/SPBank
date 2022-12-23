package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstraint;
import com.zensei.backendsophosbank.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    String saveUser(User user) throws UserConstraint;
    Optional<User> getUser(Long idUser);
    String modifyUser(User user) throws RecordNotFound;
    String deleteUser(Long idUser) throws RecordNotFound, UserConstraint;
    List<User> getAllUsers();
}
