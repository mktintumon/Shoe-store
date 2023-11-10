package com.bxnhub.web.entities;

import jakarta.persistence.*;

@Entity
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String userName;
    private String email;
    private String password;
    private boolean isEnabled;
    private String secret;

    public User() {

    }


    public User(String userName, String email, String password, boolean isEnabled , String secret) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.isEnabled = isEnabled;
        this.secret = secret;
    }


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public boolean isEnabled() {
        return isEnabled;
    }


    public void setEnabled(boolean isEnabled) {
        this.isEnabled = isEnabled;
    }


    public String getSecret() {
        return secret;
    }


    public void setSecret(String secret) {
        this.secret = secret;
    }

    
}
