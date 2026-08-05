package com.thulasi.chats.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    private static final String SECRET_KEY =
            "ThulasiBangarpetChatsSecretKey2026ThulasiBangarpetChats";

    private static final long EXPIRATION =
            1000 * 60 * 60 * 24;

    private final SecretKey key =
            Keys.hmacShaKeyFor(
                    SECRET_KEY.getBytes(StandardCharsets.UTF_8)
            );

    /*
     * Generate JWT
     */

    public String generateToken(
            String email,
            String role
    ) {

        Map<String, Object> claims =
                new HashMap<>();

        claims.put("role", role);

        return Jwts.builder()

                .claims(claims)

                .subject(email)

                .issuedAt(new Date())

                .expiration(

                        new Date(

                                System.currentTimeMillis()

                                        + EXPIRATION

                        )

                )

                .signWith(key)

                .compact();

    }

    /*
     * Extract Claims
     */

    public Claims extractAllClaims(
            String token
    ) {

        return Jwts.parser()

                .verifyWith(key)

                .build()

                .parseSignedClaims(token)

                .getPayload();

    }

    /*
     * Extract Email
     */

    public String extractEmail(
            String token
    ) {

        return extractAllClaims(token)

                .getSubject();

    }

    /*
     * Extract Role
     */

    public String extractRole(
            String token
    ) {

        return extractAllClaims(token)

                .get("role", String.class);

    }

    /*
     * Expiration
     */

    public Date extractExpiration(
            String token
    ) {

        return extractAllClaims(token)

                .getExpiration();

    }

    /*
     * Expired
     */

    public boolean isTokenExpired(
            String token
    ) {

        return extractExpiration(token)

                .before(new Date());

    }

    /*
     * Validate Token
     */

    public boolean validateToken(
            String token,
            String email
    ) {

        return email.equals(extractEmail(token))

                &&

                !isTokenExpired(token);

    }

}
