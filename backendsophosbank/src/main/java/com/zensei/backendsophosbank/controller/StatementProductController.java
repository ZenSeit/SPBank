package com.zensei.backendsophosbank.controller;

import com.zensei.backendsophosbank.exception.ProductConstraint;
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
@CrossOrigin
public class StatementProductController {

    private final StatementProductService spService;

    @GetMapping
    public ResponseEntity getStatementsForProduct(@RequestParam Long idAccount) throws RecordNotFound {
        return new ResponseEntity(spService.getStatementsByOwner(idAccount), HttpStatus.OK);
    }

    @PostMapping(value = "{id}/credit")
    public ResponseEntity creditToAccount(@PathVariable Long id, @RequestBody StatementProduct stObject) throws RecordNotFound {
        return new ResponseEntity(spService.creditToProduct(stObject,id),HttpStatus.OK);
    }

    @PostMapping(value = "{id}/debit")
    public ResponseEntity debitFromAccount(@PathVariable Long id, @RequestBody StatementProduct stObject) throws RecordNotFound, ProductConstraint {
        return new ResponseEntity(spService.debitFromProduct(stObject,id),HttpStatus.OK);
    }

    @PostMapping(value = "{id}/transfer")
    public ResponseEntity transferToAccount(@PathVariable Long id, @RequestBody StatementProduct stObject, @RequestParam String toAccount) throws ProductConstraint, RecordNotFound {
        return new ResponseEntity(spService.transferToAccount(id,toAccount,stObject),HttpStatus.OK);
    }


}
