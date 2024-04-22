package com.sathu.serviceconnect.service;

import com.sathu.serviceconnect.model.Request;
import com.sathu.serviceconnect.model.User;
import com.sathu.serviceconnect.model.UserDetails;
import com.sathu.serviceconnect.repository.RequestRepository;
import com.sathu.serviceconnect.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.sathu.serviceconnect.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private UserDetailsRepository   userDetailsRepository;

    @Override
    public User getUserByUsername(String username) {
        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserByUsername(username));
        if(userDb.isPresent()){
            return userDb.get();
        }else {
            return null;
        }
    }

    @Override
    public List<User> getAllUsers() {
        Optional<List<User>> userDb = Optional.ofNullable(this.userRepository.findAll());
        if(userDb.isPresent()){
            return userDb.get();
        }else {
            return null;
        }
    }

    @Override
    public User createUser(User user) {
        userRepository.save(user);
        UserDetails ud = new UserDetails(user.getUsername(),user.getPassword(),"USER");
        userDetailsRepository.save(ud);
        return user;
    }

    @Override
    public User updateUser(User user) {
        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserByUsername(user.getUsername()));
        if(userDb.isPresent()){
            User userUpdate = userDb.get();
            userUpdate.setName(user.getName()!=null ? user.getName() : userUpdate.getName());
            userUpdate.setPassword(user.getPassword()!=null ? user.getPassword() : userUpdate.getPassword());
            userUpdate.setEmail(user.getEmail()!=null ? user.getEmail() : userUpdate.getEmail());
            userUpdate.setAddress(user.getAddress()!=null ? user.getAddress() : userUpdate.getAddress());
            userUpdate.setPhoneNumber(user.getPhoneNumber()!=null ? user.getPhoneNumber() : userUpdate.getPhoneNumber());
            userUpdate.setCity(user.getCity()!=null ? user.getCity() : userUpdate.getCity());
            userRepository.save(userUpdate);
//            Optional<UserDetails> ud= Opti onal.ofNullable(userDetailsRepository.findByUsername(user.getUsername()));
//            ud.get().setPassword(user.getPassword()!=null ? user.getPassword() : ud.get().getPassword());
//            userDetailsRepository.save(ud.get());
            return userUpdate;
        }else {
            return null;
        }
    }

    @Override
    public void deleteUser(String username) {
        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserByUsername(username));
        if(userDb.isPresent()){
            userRepository.delete(userDb.get());
            UserDetails ud=  userDetailsRepository.findByUsername(username);
            userDetailsRepository.delete(ud);
        }
    }

    @Override
    public void addRequest(String username, int request) {
        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserByUsername(username));
        if(userDb.isPresent()){
            User userUpdate = userDb.get();
            userUpdate.getRequests().add(request);
            userRepository.save(userUpdate);
        }
    }

    @Override
    public List<Request> getAllRequests(String username) {
        Optional<User> userDb = Optional.ofNullable(this.userRepository.findUserByUsername(username));
        if(userDb.isPresent()){
            return (requestRepository.findAllByServiceProvider(username).get());
        }else {
            return null;
        }
    }
}
