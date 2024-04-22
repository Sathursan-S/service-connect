package com.sathu.serviceconnect.repository;

import com.sathu.serviceconnect.model.Service;
import com.sathu.serviceconnect.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends MongoRepository<Service, String> {
    Service findServiceByServiceType(String serviceType);
    @Query("{'serviceType': ?0}")
    Optional<String> findAllServiceType();
}
