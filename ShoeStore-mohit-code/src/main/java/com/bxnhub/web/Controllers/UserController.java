package com.bxnhub.web.Controllers;

import com.bxnhub.web.entities.User;

import com.bxnhub.web.service.UserService;
import com.bxnhub.web.service.UserServiceInterface;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    private UserServiceInterface userServiceInterface;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        return userServiceInterface.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/users/{userId}")
    public Optional<User> getUserById(@PathVariable("userId") Integer userId) {
        return this.userService.getUserById(userId);
    }

    @GetMapping("/users/email/{email}")
    public User getUserByEmail(@PathVariable("email") String email) {
        return this.userService.getUserByEmail(email);
    }

    @GetMapping("/users/emailpass/{email}/{password}")
    public User getUserByEmailAndPassword(@PathVariable("email") String email,
            @PathVariable("password") String password) {
        return this.userService.getUserByEmailAndPassword(email, password);
    }

    @DeleteMapping("/users/{userId}")
    public void deleteUser(@PathVariable("userId") Integer userId) {
        this.userService.deleteUser(userId);
    }

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<?> confirmUserAccount(@RequestParam("token")String confirmationToken) {
        return userServiceInterface.confirmEmail(confirmationToken);
    }

}
