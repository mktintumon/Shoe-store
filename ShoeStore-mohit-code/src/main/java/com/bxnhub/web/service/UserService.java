package com.bxnhub.web.service;

import com.bxnhub.web.Repository.UserRepo;
import com.bxnhub.web.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public List<User> getAllUsers() {
        List<User> list = (List<User>) this.userRepo.findAll();
        return list;
    }

    public Optional<User> getUserById(Integer userId) {
        Optional<User> user = null;
        try {
            user = this.userRepo.findById(userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }

    public User getUserByEmail(String email) {

        User user = null;
        try {
            user = this.userRepo.findByEmail(email);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }

    public User getUserByEmailAndPassword(String email, String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //String bcPass = passwordEncoder.encode(password);
         
        User user = null;
        try {
            user = this.userRepo.findByEmail(email);
            String encodedPass = user.getPassword();

            if (user != null) {
                if (!passwordEncoder.matches(password,encodedPass)) {
                    System.out.println("Wrong password!!!");
                    return null;
                } else {
                     return user;
                }
            }
        } catch (Exception e) {
            System.out.println("User not found");
        }
        return null;
    }

    public void deleteUser(int userId) {
        userRepo.deleteById(userId);
    }
}
