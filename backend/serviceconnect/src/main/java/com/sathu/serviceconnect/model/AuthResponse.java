package com.sathu.serviceconnect.model;

import lombok.*;
@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private boolean success;
    private String message;
    private String type = "Bearer";
    private String username;
    private String role;

    public AuthResponse(String token, String username, String role) {
        this.token = token;
        this.username = username;
        this.role = role;
    }
}
