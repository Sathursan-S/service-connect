package com.sathu.serviceconnect.controller;

import com.sathu.serviceconnect.model.AuthResponse;
import com.sathu.serviceconnect.model.User;
import com.sathu.serviceconnect.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sathu.serviceconnect.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers(){
        if (userService.getAllUsers() != null) {
            return ResponseEntity.ok().body(userService.getAllUsers());
        } else {
            throw new RuntimeException("No users found");
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username){
        if (userService.getUserByUsername(username) != null) {
            return ResponseEntity.ok().body(userService.getUserByUsername(username));
        } else {
            throw new RuntimeException("User not found with username: " + username);
        }
    }

    @PutMapping("/{username}")
    public ResponseEntity<User> updateUser(@PathVariable String username, @RequestBody User user){
        user.setUsername(username);
        if (userService.getUserByUsername(username) != null) {
            return ResponseEntity.ok().body(userService.updateUser(user));
        } else {
            throw new RuntimeException("User can not updated");
        }
    }

    @PostMapping("/")
    public ResponseEntity<AuthResponse> createUser(@RequestBody User user){
        if (userService.getUserByUsername(user.getUsername()) != null) {
            throw new RuntimeException("User already exist");
        }
       else if ((userService.createUser(user) != null)&&(user.getUsername()!=null)) {
           String token = jwtService.generateToken(user.getUsername(), "STD");

           AuthResponse authResponse = new AuthResponse(token, user.getUsername(), "STD");
           authResponse.setSuccess(true);
              authResponse.setMessage("User created and Authenticated");
           return ResponseEntity.ok(authResponse);
       } else {

           throw new RuntimeException("User not created");
       }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username){
        Optional<User> user = Optional.ofNullable(userService.getUserByUsername(username));
        if ( user.isPresent()) {
            userService.deleteUser(username);
            return ResponseEntity.ok().body("User deleted");
        } else {
            throw new RuntimeException("User can not deleted");
        }
    }
}
