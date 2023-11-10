package com.bxnhub.web.service;

import org.springframework.http.ResponseEntity;

import com.bxnhub.web.entities.User;

public interface UserServiceInterface {
    ResponseEntity<?> saveUser(User user);

    ResponseEntity<?> confirmEmail(String confirmationToken);
    
} 
