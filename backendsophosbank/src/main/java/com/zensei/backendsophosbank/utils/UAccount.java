package com.zensei.backendsophosbank.utils;

import com.zensei.backendsophosbank.exception.ProductConstraint;
import com.zensei.backendsophosbank.model.Product;

public class UAccount {

    public static String serialAccount(String typeS){
        String specialString;
        if(typeS.equalsIgnoreCase("checking")){
            specialString="23";
            specialString+=Math.round(Math.random()*100000000);
            while(specialString.length()<10){
                specialString+=0;
            }
            return specialString;
        } else {
            specialString="46";
            specialString+=Math.round(Math.random()*100000000);
            while(specialString.length()<10){
                specialString+=0;
            }
            return specialString;
        }
    }

    public static void checkBalance(Product product) throws ProductConstraint {
        if(product.getAccountType().equalsIgnoreCase("saving") && product.getBalance()<0){
            throw new ProductConstraint("Your balance must be at least 0");
        }else if (product.getAccountType().equalsIgnoreCase("checking") && product.getBalance()<-3000000){
            throw new ProductConstraint("This account type can only overdraw up to 3000000");
        }
    }

    public static void applyGMF(Product product){
        if(product.isExceptionGMF()) {
            product.setAvailableBalance(product.getBalance());
        }else {
            product.setAvailableBalance(product.getBalance()*0.996);
        }

    }

}
