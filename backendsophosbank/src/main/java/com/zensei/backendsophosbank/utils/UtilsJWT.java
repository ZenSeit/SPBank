package com.zensei.backendsophosbank.utils;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.stereotype.Component;


import java.security.Key;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Component
public class UtilsJWT {

    public static final String ACCESS_TOKEN_SECRET = "myAppSophosBank87*0395784awqsdfghcvxfdfr";
    public static final long JWT_TOKEN_VALIDITY = 1 * 60 * 60;

    public static String createToken(String name,String email,Long id){
        Long expirationTime = JWT_TOKEN_VALIDITY*1000;
        Date expirtationDate= new Date(System.currentTimeMillis()+expirationTime);

        Map<String,Object> extra = new HashMap<>();
        extra.put("name",name);
        extra.put("id",id);

        Key myKey = Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes());

        return Jwts.builder().setSubject(email)
                .setExpiration(expirtationDate)
                .addClaims(extra)
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
                .compact();
    }

    public static UsernamePasswordAuthenticationToken getAuthentication (String token){
        try{
            Claims claims = Jwts.parser()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .parseClaimsJws(token)
                    .getBody();

            String email = claims.getSubject();

            return new UsernamePasswordAuthenticationToken(email,null, Collections.emptyList());
        }catch (JwtException e){
            return null;
        }
    }

}
