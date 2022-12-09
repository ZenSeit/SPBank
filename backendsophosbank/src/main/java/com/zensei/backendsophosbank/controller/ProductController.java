package com.zensei.backendsophosbank.controller;


import com.zensei.backendsophosbank.exception.UserConstrains;
import com.zensei.backendsophosbank.model.Product;
import com.zensei.backendsophosbank.model.User;
import com.zensei.backendsophosbank.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "api/v1/product")
public class ProductController {

    private final ProductService pService;

    @PostMapping
    public ResponseEntity createAccount(@RequestBody @Valid Product product) {
        return ResponseEntity.ok(pService.createAccount(product));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity(pService.getAccount(id), HttpStatus.OK);
    }

}
