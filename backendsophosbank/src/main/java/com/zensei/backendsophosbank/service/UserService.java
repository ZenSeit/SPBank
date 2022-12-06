package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@Repository
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository uRepository;

    @Override
    public String saveUser(User user) {
        uRepository.save(user);
        return "Created";
    }

    @Override
    public Optional<User> getUser(Long idUser) {
        return uRepository.findById(idUser);
    }
}
