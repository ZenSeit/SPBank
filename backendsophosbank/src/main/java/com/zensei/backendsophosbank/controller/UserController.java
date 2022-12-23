package com.zensei.backendsophosbank.controller;


import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstraint;
import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class UserController {

    private final UserService iUser;

    @GetMapping
    public ResponseEntity getUsers(){
        return ResponseEntity.ok(iUser.getAllUsers());
    }

    @PostMapping
    public ResponseEntity signUpUser(@RequestBody @Valid User us) throws UserConstraint {
        return ResponseEntity.ok(iUser.saveUser(us));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity(iUser.getUser(id), HttpStatus.OK);
    }

    @PostMapping(value = "{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody @Valid User us) throws RecordNotFound {
        us.setId(id);
        return new ResponseEntity(iUser.modifyUser(us), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) throws RecordNotFound, UserConstraint {
        return new ResponseEntity(iUser.deleteUser(id),HttpStatus.OK);
    }

}
