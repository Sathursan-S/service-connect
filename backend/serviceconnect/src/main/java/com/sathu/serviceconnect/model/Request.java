package com.sathu.serviceconnect.model;

import jakarta.annotation.Generated;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "request")
public class Request {
    @Id
    @Indexed(unique = true)
    private String reqId;
    private String serviceType;
    private String serviceDescription;
    private String serviceProvider;
    private String user;
    private String status;
    private String date;
    private String address;
    private String city;
}
