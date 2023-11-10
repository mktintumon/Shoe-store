package com.bxnhub.web.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bxnhub.web.entities.QRCodeResponse;
import com.bxnhub.web.entities.User;
import com.bxnhub.web.service.MFAServices;
import com.bxnhub.web.service.UserService;

@RestController
@CrossOrigin("http://127.0.0.1:5173/")
public class MFAController {

    @Autowired
    public MFAServices mfaServices;

    @Autowired
    UserService userService;

    @GetMapping("/generate/{email}")
    public QRCodeResponse generateToken(@PathVariable("email") String email) {
        User user = userService.getUserByEmail(email);
        String secret = user.getSecret();
        String qrcodeUrl = mfaServices.generateMFAQRCode(user);
        return new QRCodeResponse(qrcodeUrl,secret);
    }

    @PostMapping("/verify")
    public Boolean verify(@RequestParam String code, @RequestParam String secret){
        return mfaServices.validateMFAOTP(code,secret);
    }
}
