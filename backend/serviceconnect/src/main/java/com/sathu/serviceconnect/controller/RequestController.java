package com.sathu.serviceconnect.controller;

import com.sathu.serviceconnect.model.Request;
import com.sathu.serviceconnect.service.RequestService;
import com.sathu.serviceconnect.service.RequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/request")
@CrossOrigin("http://localhost:5173")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping("/user/{user}")
    public ResponseEntity<List<Request>> getAllRequestsByUser(@PathVariable String user){
        if (requestService.getAllRequestsByUser(user) != null) {
            return ResponseEntity.ok().body(requestService.getAllRequestsByUser(user));
        } else {
            throw new RuntimeException("No requests found");
        }
    }

    @GetMapping("/sp/{serviceProvider}")
    public ResponseEntity<List<Request>> getAllRequestsByServiceProvider(@PathVariable String serviceProvider){
        if (requestService.getAllRequestsByServiceProvider(serviceProvider) != null) {
            return ResponseEntity.ok().body(requestService.getAllRequestsByServiceProvider(serviceProvider));
        } else {
            throw new RuntimeException("No requests found");
        }
    }

    @PostMapping("/")
    public ResponseEntity<Request> createRequest(@RequestBody Request request){
        String uniqueReqId = UUID.randomUUID().toString();
        request.setReqId(uniqueReqId);
        Optional<Request> rq = Optional.ofNullable(requestService.createRequest(request));
        if (rq.isPresent()) {
            return ResponseEntity.ok().body(rq.get());
        } else {
            throw new RuntimeException("Request not created");
        }
    }

    @PutMapping("/{reqId}")
    public ResponseEntity<Request> updateRequest(@PathVariable String reqId,@RequestBody Request request){
        request.setReqId(reqId);
        Optional<Request> request1= Optional.ofNullable(requestService.updateRequest(request));
        if ( request1.isPresent()) {
            return ResponseEntity.ok().body(request1.get());
        } else {
            throw new RuntimeException("Request can not updated");
        }
    }

    @GetMapping("/{reqId}")
    public ResponseEntity<Request> getRequestById(@PathVariable String reqId){
        Optional<Request> requestDb = Optional.ofNullable(this.requestService.getRequestById(reqId));
        if(requestDb.isPresent()){
            return ResponseEntity.ok().body(requestDb.get());
        }else {
            throw new RuntimeException("Request not found with ID: " + reqId);
        }
    }

    @DeleteMapping("/{reqId}")
    public ResponseEntity<String> deleteRequest(@PathVariable String reqId){
        if (requestService.getRequestById(reqId) != null) {
            requestService.deleteRequest(reqId);
            return ResponseEntity.ok().body("Request deleted");
        } else {
            throw new RuntimeException("Request can not deleted");
        }
    }
}
