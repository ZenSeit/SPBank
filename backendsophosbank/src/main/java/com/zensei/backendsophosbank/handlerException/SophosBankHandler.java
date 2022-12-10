package com.zensei.backendsophosbank.handlerException;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.exception.RecordNotFound;
import com.zensei.backendsophosbank.exception.UserConstraint;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class SophosBankHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> missingField(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(e -> {
            errors.put(e.getField(),e.getDefaultMessage());
        });
        return errors;
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(RecordNotFound.class)
    public String itemNotFound(RecordNotFound ex){
        return ex.getMessage();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(DateTimeParseException.class)
    public String formatDateIncorrect(DateTimeParseException ex){
        return "Type a valid date yyyy-mm-dd";
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(UserConstraint.class)
    public String userConstrains(UserConstraint ex){
        return ex.getMessage();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ProductConstraint.class)
    public String productConstrains(ProductConstraint ex){
        return ex.getMessage();
    }


}
