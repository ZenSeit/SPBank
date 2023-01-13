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

    public static void checkBalanceCreation(Product product) throws ProductConstraint {
        if(product.getAccountType().equalsIgnoreCase("saving") && product.getBalance()<0){
            throw new ProductConstraint("Your balance must be at least 0");
        }else if (product.getAccountType().equalsIgnoreCase("checking") && product.getBalance()<-3000000){
            throw new ProductConstraint("This account type can only overdraw up to 3000000");
        }
    }

    public static void checkBalanceOperation(Product product, double debitValue) throws ProductConstraint {
        double balanceTransaction = product.getBalance()-valueForGMF(product.isExceptionGMF(), debitValue);
        if(product.getAccountType().equalsIgnoreCase("saving") && product.getAvailableBalance()-debitValue<=0.8 && product.getAvailableBalance()-debitValue>=0) balanceTransaction=0;
        if(product.getAccountType().equalsIgnoreCase("saving") && balanceTransaction<0){
            throw new ProductConstraint("Your balance must be at least 0. You have $ "+product.getAvailableBalance()+" available.");
        }else if (product.getAccountType().equalsIgnoreCase("checking") && balanceTransaction<-3000000){
            throw new ProductConstraint("This account type can only overdraw up to 3000000.");
        }
        product.setBalance(balanceTransaction);
    }

    public static double valueForGMF (boolean GMF, double applyValue){
        applyValue=Math.abs(applyValue);
        if(GMF) {
            return applyValue;
        }else {
            //System.out.println(applyValue+(applyValue/1000)*4);
            return applyValue+(applyValue/1000)*4;
        }
    }
    public static void applyGMF(Product product){
        if(product.isExceptionGMF()) {
            if(product.getBalance()<0) {
                product.setAvailableBalance(3000000+product.getBalance());
            }else {
                product.setAvailableBalance(product.getBalance());
            }
        }else {
            if(product.getBalance()<0) {
                product.setAvailableBalance(3000000+product.getBalance());
            }else{
                product.setAvailableBalance(product.getBalance()- (product.getBalance()*4)/1000);
            }
        }

    }

}
