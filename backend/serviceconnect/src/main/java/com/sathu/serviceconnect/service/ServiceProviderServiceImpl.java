package com.sathu.serviceconnect.service;

import com.sathu.serviceconnect.model.Request;
import com.sathu.serviceconnect.model.ServiceProvider;
import com.sathu.serviceconnect.model.UserDetails;
import com.sathu.serviceconnect.repository.RequestRepository;
import com.sathu.serviceconnect.repository.ServiceProviderRepository;
import com.sathu.serviceconnect.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceProviderServiceImpl implements ServiceProviderService{
    @Autowired
    private ServiceProviderRepository serviceProviderRepository;

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Override
    public List<ServiceProvider> getAllServiceProviders() {
        Optional<List<ServiceProvider>> serviceProviderDb = Optional.ofNullable(this.serviceProviderRepository.findAll());
        if(serviceProviderDb.isPresent()){
            return serviceProviderDb.get();
        }else {
            return null;
        }
    }

    @Override
    public List<ServiceProvider> getAllServiceProvidersByCityAndService(String city, String service) {
        Optional<Optional<List<ServiceProvider>>> serviceProviderDb = Optional.ofNullable(this.serviceProviderRepository.findByCityAndService(city,service));
        if(serviceProviderDb.isPresent()){
            return serviceProviderDb.get().get();
        }else {
            return null;
        }
    }

    @Override
    public ServiceProvider getServiceProviderByNIC(String nic) {
        Optional<ServiceProvider> serviceProviderDb = Optional.ofNullable(this.serviceProviderRepository.findByNic(nic));
        if(serviceProviderDb.isPresent()){
            return serviceProviderDb.get();
        }else {
            return null;
        }
    }

    @Override
    public ServiceProvider createServiceProvider(ServiceProvider serviceProvider) {
        serviceProviderRepository.save(serviceProvider);
        UserDetails ud = new UserDetails(serviceProvider.getNic(),serviceProvider.getPassword(),"PRO");
        userDetailsRepository.save(ud);
        return serviceProvider;
    }

    @Override
    public ServiceProvider updateServiceProvider(ServiceProvider serviceProvider) {
        Optional<ServiceProvider> serviceProviderDb = Optional.ofNullable(this.serviceProviderRepository.findByNic(serviceProvider.getNic()));
        if(serviceProviderDb.isPresent()){
            ServiceProvider serviceProviderUpdate = serviceProviderDb.get();
            serviceProviderUpdate.setNic(serviceProvider.getNic()!=null ? serviceProvider.getNic() : serviceProviderUpdate.getNic());
            serviceProviderUpdate.setFirstname(serviceProvider.getFirstname()!=null ? serviceProvider.getFirstname() : serviceProviderUpdate.getFirstname());
            serviceProviderUpdate.setLastname(serviceProvider.getLastname()!=null ? serviceProvider.getLastname() : serviceProviderUpdate.getLastname());
            serviceProviderUpdate.setAddress(serviceProvider.getAddress()!=null ? serviceProvider.getAddress() : serviceProviderUpdate.getAddress());
            serviceProviderUpdate.setPrice(serviceProvider.getPrice()>0 ? serviceProvider.getPrice() : serviceProviderUpdate.getPrice());
            serviceProviderUpdate.setRating(serviceProvider.getRating()>0 ? serviceProvider.getRating() : serviceProviderUpdate.getRating());
            serviceProviderUpdate.setPhoneNumber(serviceProvider.getPhoneNumber()!=null ? serviceProvider.getPhoneNumber() : serviceProviderUpdate.getPhoneNumber());
            serviceProviderUpdate.setCity(serviceProvider.getCity()!=null ? serviceProvider.getCity() : serviceProviderUpdate.getCity());
            serviceProviderRepository.save(serviceProviderUpdate);
            UserDetails ud=  userDetailsRepository.findByUsername(serviceProvider.getNic());
            ud.setPassword(serviceProvider.getPassword()!=null ? serviceProvider.getPassword() : ud.getPassword());
            userDetailsRepository.save(ud);
            return serviceProviderUpdate;
        }else {
            return null;
        }
    }

    @Override
    public void deleteServiceProvider(String nic) {
        Optional<ServiceProvider> serviceProviderDb = Optional.ofNullable(this.serviceProviderRepository.findByNic(nic));
        if(serviceProviderDb.isPresent()){
            serviceProviderRepository.deleteByNic(nic);
            UserDetails ud=  userDetailsRepository.findByUsername(nic);
            userDetailsRepository.delete(ud);
        }
    }

    @Override
    public List<Request> getAllRequests(String nic) {
        Optional<Optional<List<Request>>> requestDb = Optional.ofNullable(this.requestRepository.findAllByServiceProvider(nic));
        if(requestDb.isPresent()){
            return requestDb.get().get();
        }else {
            return null;
        }
    }
}
