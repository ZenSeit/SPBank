package com.zensei.backendsophosbank.utils;

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

}
