package com.sathu.serviceconnect.repository;

import com.sathu.serviceconnect.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findUserByUsername(String username);
}
