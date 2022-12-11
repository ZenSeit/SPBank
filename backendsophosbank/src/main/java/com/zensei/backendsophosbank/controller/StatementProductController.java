package com.zensei.backendsophosbank.controller;

import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.model.StatementProduct;
import com.zensei.backendsophosbank.service.StatementProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "api/v1/statement")
public class StatementProductController {

    private final StatementProductService spService;

    @GetMapping
    public ResponseEntity getStatementsForProduct(@RequestParam Long idAccount) throws RecordNotFound {
        return new ResponseEntity(spService.getStatementsByOwner(idAccount), HttpStatus.OK);
    }

    @PostMapping(value = "{id}/credit")
    public ResponseEntity creditToAccount(@RequestBody StatementProduct stObject) throws RecordNotFound {
        return new ResponseEntity(spService.creditToProduct(stObject),HttpStatus.OK);
    }


}
