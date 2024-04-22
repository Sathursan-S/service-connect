package com.sathu.serviceconnect.repository;

import com.sathu.serviceconnect.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {
    UserDetails findByUsername(String username);
}
