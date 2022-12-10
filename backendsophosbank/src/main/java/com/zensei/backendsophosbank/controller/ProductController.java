package com.zensei.backendsophosbank.controller;


import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.Product;
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
    public ResponseEntity createAccount(@RequestBody @Valid Product product) throws ProductConstraint, RecordNotFound {
        return ResponseEntity.ok(pService.createAccount(product));
    }

    @GetMapping(value = "{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity(pService.getAccount(id), HttpStatus.OK);
    }

    @PostMapping(value = "{id}")
    public ResponseEntity updateAccount(@PathVariable Long id, @RequestBody @Valid Product product) throws ProductConstraint, RecordNotFound {
        product.setId(id);
        return ResponseEntity.ok(pService.updateAccount(product));
    }

}
