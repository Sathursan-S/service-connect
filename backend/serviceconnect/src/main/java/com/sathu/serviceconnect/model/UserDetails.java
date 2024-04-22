package com.sathu.serviceconnect.model;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.*;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "userDetails")
public class UserDetails {
    @NotBlank
    @NotNull
    @Indexed(unique = true)
    private String username;
    private String password;
    private String role;
}
