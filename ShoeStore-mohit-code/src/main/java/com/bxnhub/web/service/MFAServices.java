package com.bxnhub.web.service;


import org.springframework.stereotype.Service;
import com.bxnhub.web.entities.User;
import dev.samstevens.totp.code.CodeGenerator;
import dev.samstevens.totp.code.CodeVerifier;
import dev.samstevens.totp.code.DefaultCodeGenerator;
import dev.samstevens.totp.code.DefaultCodeVerifier;
import dev.samstevens.totp.time.SystemTimeProvider;
import dev.samstevens.totp.time.TimeProvider;

@Service
public class MFAServices {

    public String generateMFAQRCode(User user) {

        String url = "https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/Example:" 
                    + user.getEmail() + "?secret=" + user.getSecret() + "&issuer=ShoeStore"; 

        return url;
    }

    // Verify MFA otp
    public boolean validateMFAOTP(String code, String secret) {
        TimeProvider timeProvider = new SystemTimeProvider();
        CodeGenerator codeGenerator = new DefaultCodeGenerator();
        CodeVerifier verifier = new DefaultCodeVerifier(codeGenerator, timeProvider);
        return verifier.isValidCode(secret, code); // Return otp entered is true or false
    }
}
