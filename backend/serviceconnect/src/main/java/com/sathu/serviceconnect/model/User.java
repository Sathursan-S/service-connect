package com.sathu.serviceconnect.model;

import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user")
public class User {
    @Id
    private String _id;
    private String name;
    @NotBlank
    @NotNull
    @Indexed(unique = true)
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private String address;
    private String city;
    private List<Integer> requests;
}
