package com.sathu.serviceconnect.service;

import com.sathu.serviceconnect.model.Request;
import com.sathu.serviceconnect.model.Service;
import com.sathu.serviceconnect.model.User;

import java.util.List;


public interface UserService {
    User getUserByUsername(String username);
    List<User> getAllUsers();
    User createUser(User user);
    User updateUser(User user);
    void deleteUser(String username);
    void addRequest(String username, int reqId);
    List<Request> getAllRequests(String username);
}
