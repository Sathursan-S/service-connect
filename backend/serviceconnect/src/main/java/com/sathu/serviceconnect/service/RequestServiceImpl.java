package com.sathu.serviceconnect.service;

import com.sathu.serviceconnect.model.Request;
import com.sathu.serviceconnect.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestRepository requestRepository;

    @Override
    public List<Request> getAllRequestsByServiceProvider(String serviceProvider) {
        Optional<Optional<List<Request>>> requestDb = Optional.ofNullable(this.requestRepository.findAllByServiceProvider(serviceProvider));
        if(requestDb.isPresent()){
            return requestDb.get().get();
        }else {
            return null;
        }
    }

    @Override
    public List<Request> getAllRequestsByUser(String user) {
        Optional<Optional<List<Request>>> requestDb = Optional.ofNullable(this.requestRepository.findAllByUser(user));
        if(requestDb.isPresent()){
            return requestDb.get().get();
        }else {
            return null;
        }
    }

    @Override
    public Request createRequest(Request request) {
        requestRepository.save(request);
        return request;
    }

    @Override
    public Request updateRequest(Request request) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(request.getReqId()));
        if(requestDb.isPresent()){
            Request requestUpdate = requestDb.get();
            requestUpdate.setReqId(request.getReqId()!=null ? request.getReqId() : requestUpdate.getReqId());
            requestUpdate.setServiceProvider(request.getServiceProvider()!=null ? request.getServiceProvider() : requestUpdate.getServiceProvider());
            requestUpdate.setUser(request.getUser()!=null ? request.getUser() : requestUpdate.getUser());
            requestUpdate.setServiceType(request.getServiceType()!=null ? request.getServiceType() : requestUpdate.getServiceType());
            requestUpdate.setDate(request.getDate()!=null ? request.getDate() : requestUpdate.getDate());
            requestUpdate.setStatus(request.getStatus()!=null ? request.getStatus() : requestUpdate.getStatus());
            requestRepository.save(requestUpdate);
            return requestUpdate;
        }else {
            return null;
        }
    }

    @Override
    public Request getRequestById(String reqId) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(reqId));
        if(requestDb.isPresent()){
            return requestDb.get();
        }else {
            return null;
        }
    }

    @Override
    public void deleteRequest(String reqId) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(reqId));
        if(requestDb.isPresent()){
            requestRepository.delete(requestDb.get());
        }
    }
}
