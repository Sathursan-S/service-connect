package com.sathu.serviceconnect.model;

import lombok.*;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "service")
public class Service {
    @Indexed(unique = true)
    public String serviceType;
    public String serviceDescription;
    public String imgPath;
}
