package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstraint;
import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.repository.ProductRepository;
import com.zensei.backendsophosbank.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.Optional;


@Service
@Repository
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository uRepository;

    private final ProductRepository pRepository;

    @Override
    public String saveUser(User user) throws UserConstraint {
        Optional<User> verifiedUser=uRepository.findByEmail(user.getEmail());
        if(verifiedUser.isPresent()) throw new UserConstraint("Email already exist!. Choose other to register");
        if(Period.between(user.getBirthDate(), LocalDate.now()).getYears()<18){
            throw new UserConstraint("You must be at least 18 years old to register in this Bank");
        }
        uRepository.save(user);
        return "Created";
    }

    @Override
    public Optional<User> getUser(Long idUser) {
        return uRepository.findById(idUser);
    }

    @Override
    public String modifyUser(User user) throws RecordNotFound {

        Optional<User> verifiedUser=uRepository.findById(user.getId());

        if(verifiedUser.isEmpty()) throw new RecordNotFound("User isn't in DB");

        verifiedUser.get().setIdNumber(user.getIdNumber());
        verifiedUser.get().setIdType(user.getIdType());
        verifiedUser.get().setNames(user.getNames());
        verifiedUser.get().setLastNames(user.getLastNames());

        uRepository.save(verifiedUser.get());

        return "User updated successfully";
    }

    @Override
    public String deleteUser(Long idUser) throws RecordNotFound, UserConstraint {

        Optional<User> verifiedUser=uRepository.findById(idUser);

        if(verifiedUser.isEmpty()) throw new RecordNotFound("User isn't in DB");

        if(pRepository.countActiveAccounts(verifiedUser.get()).intValue()>0){
            throw new UserConstraint("You need to cancel accounts associated to user.");
        }

        uRepository.deleteById(verifiedUser.get().getId());
        return "User deleted";
    }
}
