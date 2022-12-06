package com.zensei.backendsophosbank.controller;


import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "api/v1")
public class UserController {

    private final UserService iUser;

    @PostMapping
    public ResponseEntity signUpUser(@RequestBody @Valid User us){
        return ResponseEntity.ok(iUser.saveUser(us));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity(iUser.getUser(id), HttpStatus.OK);
    }

}
