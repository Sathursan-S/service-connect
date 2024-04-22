package com.sathu.serviceconnect.controller;

import com.sathu.serviceconnect.model.AuthResponse;
import com.sathu.serviceconnect.model.UserDetails;
import com.sathu.serviceconnect.repository.UserDetailsRepository;
import com.sathu.serviceconnect.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("http://localhost:5173")
public class LoginController {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody UserDetails userDetails){
        UserDetails user = userDetailsRepository.findByUsername(userDetails.getUsername());
        if (user != null) {
            if (user.getPassword().equals(userDetails.getPassword())) {
                String token = jwtService.generateToken(user.getUsername(), user.getRole());
                AuthResponse authResponse = new AuthResponse(token, user.getUsername(), user.getRole());
                authResponse.setSuccess(true);
                authResponse.setMessage("User Authenticated");
                return ResponseEntity.ok(authResponse);
            } else {
                AuthResponse authResponse = new AuthResponse();
                authResponse.setSuccess(false);
                authResponse.setMessage("Invalid password");
                return ResponseEntity.ok(authResponse);
            }
        } else {
            throw new RuntimeException("User not found");
        }
    }
}
