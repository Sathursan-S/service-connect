package com.sathu.serviceconnect.controller;

import com.sathu.serviceconnect.model.AuthResponse;
import com.sathu.serviceconnect.model.ServiceProvider;
import com.sathu.serviceconnect.service.JwtService;
import com.sathu.serviceconnect.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/sp")
@CrossOrigin("http://localhost:5173")
public class ServiceProviderController {
    @Autowired
    private ServiceProviderService serviceProviderService;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProviders(){
        if (serviceProviderService.getAllServiceProviders() != null) {
            return ResponseEntity.ok().body(serviceProviderService.getAllServiceProviders());
        } else {
            throw new RuntimeException("No service providers found");
        }
    }

    @GetMapping("/city/{city}/service/{service}")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProvidersByCityAndService(@PathVariable String city,@PathVariable String service){
        if (serviceProviderService.getAllServiceProvidersByCityAndService(city,service) != null) {
            return ResponseEntity.ok().body(serviceProviderService.getAllServiceProvidersByCityAndService(city,service));
        } else {
            throw new RuntimeException("No service providers found");
        }
    }

    @GetMapping("/{nic}")
    public ResponseEntity<ServiceProvider> getServiceProviderByNIC(@PathVariable String nic){
        if (serviceProviderService.getServiceProviderByNIC(nic) != null) {
            return ResponseEntity.ok().body(serviceProviderService.getServiceProviderByNIC(nic));
        } else {
            throw new RuntimeException("Service provider not found with NIC: " + nic);
        }
    }

    @PutMapping("/{nic}")
    public ResponseEntity<ServiceProvider> updateServiceProvider(@PathVariable String nic,@RequestBody ServiceProvider serviceProvider){
        serviceProvider.setNic(nic);
        if (serviceProviderService.updateServiceProvider(serviceProvider) != null) {
            return ResponseEntity.ok().body(serviceProviderService.updateServiceProvider(serviceProvider));
        } else {
            throw new RuntimeException("Service provider can not updated");
        }
    }

    @PostMapping("/")
    public ResponseEntity<AuthResponse> createServiceProvider(@RequestBody ServiceProvider serviceProvider){
        if (serviceProviderService.getServiceProviderByNIC(serviceProvider.getNic()) != null) {
            throw new RuntimeException("Instructor already exist");
        }
       else if ((serviceProviderService.createServiceProvider(serviceProvider) != null) && serviceProvider.getNic()!=null){
           String token = jwtService.generateToken(serviceProvider.getNic(), "INST");
           AuthResponse authResponse = new AuthResponse(token, serviceProvider.getNic(), "INST");
           authResponse.setSuccess(true);
           authResponse.setMessage("User created and Authenticated");
           return ResponseEntity.ok(authResponse);
       } else {
           throw new RuntimeException("Instructor not created");
       }
    }

    @DeleteMapping("/{nic}")
    public ResponseEntity<String> deleteServiceProvider(@PathVariable String nic){
        Optional<ServiceProvider> serviceProvider = Optional.ofNullable(serviceProviderService.getServiceProviderByNIC(nic));
        if ( serviceProvider.isPresent()) {
            serviceProviderService.deleteServiceProvider(nic);
            return ResponseEntity.ok().body("Service provider deleted");
        } else {
            throw new RuntimeException("Service provider not found with NIC: " + nic);
        }
    }
}
