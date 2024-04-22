package com.sathu.serviceconnect.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    private final String secretKey = "YourSecretKeyhi9I9klsptrtji85hrgw7hg7hgwywyo89love9aouhpgaprhgrig9Samyu9garobphrhgahrbuhuahuuaerianvuru";
    private final long expirationTimeMillis = 864_000_000; // 10 days

    public String generateToken(String username, String roles) {
        return Jwts.builder()
                .setSubject(username)
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTimeMillis))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public String extractRoles(String token) {
        return extractClaims(token).get("roles", String.class);
    }

    public Boolean isTokenExpired(String token) {
        final Date expiration = extractClaims(token).getExpiration();
        return expiration.before(new Date());
    }

    public Boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

    private Claims extractClaims(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }
}

