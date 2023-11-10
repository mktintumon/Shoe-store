package com.bxnhub.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bxnhub.web.Repository.ConfirmationTokenRepository;
import com.bxnhub.web.Repository.UserRepo;
import com.bxnhub.web.entities.ConfirmationToken;
import com.bxnhub.web.entities.User;

import dev.samstevens.totp.secret.DefaultSecretGenerator;
import dev.samstevens.totp.secret.SecretGenerator;

@Service
public class UserServiceImpl implements UserServiceInterface {
    @Autowired
    private UserRepo userRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    EmailService emailService;


    // Creating new user -> Registration
    @Override
    public ResponseEntity<?> saveUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        BCryptPasswordEncoder bcp = new BCryptPasswordEncoder();
        String bcPass = bcp.encode(user.getPassword());
        user.setPassword(bcPass);

        SecretGenerator generator = new DefaultSecretGenerator();
        String secret = generator.generate();
        user.setSecret(secret);
        
        userRepository.save(user);

        
        ConfirmationToken confirmationToken = new ConfirmationToken(user);

        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setText("To confirm your account, please click here : "
                            + "http://localhost:8081/confirm-account?token=" + 
                            confirmationToken.getConfirmationToken());
                            
        emailService.sendEmail(mailMessage);

        System.out.println("Confirmation Token: " + confirmationToken.getConfirmationToken());

        return ResponseEntity.ok("Verify email by the link sent on your email address");
    }

    @Override
    public ResponseEntity<?> confirmEmail(String confirmationToken) {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if (token != null) {
            User user = userRepository.findByEmail(token.getUser().getEmail());
            user.setEnabled(true);
            userRepository.save(user);
            return ResponseEntity.ok("Email verified successfully!");
        }
        return ResponseEntity.badRequest().body("Error: Couldn't verify email");
    }
}
