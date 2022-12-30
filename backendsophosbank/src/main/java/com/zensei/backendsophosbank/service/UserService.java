package com.zensei.backendsophosbank.service;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstraint;
import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.repository.ProductRepository;
import com.zensei.backendsophosbank.repository.UserRepository;
import com.zensei.backendsophosbank.security.AuthCredentials;
import com.zensei.backendsophosbank.security.UserDetailsAuth;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;


@Service
@Repository
@RequiredArgsConstructor
public class UserService implements IUserService, UserDetailsService {

    private final UserRepository uRepository;

    private final ProductRepository pRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public String saveUser(User user) throws UserConstraint {
        Optional<User> verifiedUser=uRepository.findByIdNumber(user.getIdNumber());
        if(verifiedUser.isPresent()) throw new UserConstraint("There is a user registered with this id number.");
        if(Period.between(user.getBirthDate(), LocalDate.now()).getYears()<18){
            throw new UserConstraint("You must be at least 18 years old to register in this Bank");
        }
        String pass = passwordEncoder.encode(user.getPassword());
        user.setPassword(pass);
        uRepository.save(user);
        return "Created";
    }

    @Override
    public Optional<User> getUser(Long idUser) {
        return uRepository.findById(idUser);
    }

    @Override
    public String modifyUser(User user) throws RecordNotFound, UserConstraint {

        Optional<User> verifiedUser=uRepository.findById(user.getId());

        if(verifiedUser.isEmpty()) throw new RecordNotFound("User isn't in DB");

        //verifiedUser.get().setIdNumber(user.getIdNumber());
        verifiedUser.get().setIdType(user.getIdType());
        verifiedUser.get().setEmail(user.getEmail());
        if(user.getPassword().length()>0){
            if(user.getPassword().length()<4) throw new UserConstraint("Password must be at least 4 or more characters");
            String pass = passwordEncoder.encode(user.getPassword());
            verifiedUser.get().setPassword(pass);
        }
        //verifiedUser.get().setNames(user.getNames());
        //verifiedUser.get().setLastNames(user.getLastNames());

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

    @Override
    public List<User> getAllUsers() {
        return uRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userEmail = uRepository.findByEmail(email);
        if(userEmail.isEmpty()) throw new UsernameNotFoundException("User not exist");
        return new UserDetailsAuth(userEmail.get());
    }

    public String loginUser(AuthCredentials autUser){
        String pass = passwordEncoder.encode(autUser.getPassword());
        System.out.println(pass);
        return "Hello";
    }
}
