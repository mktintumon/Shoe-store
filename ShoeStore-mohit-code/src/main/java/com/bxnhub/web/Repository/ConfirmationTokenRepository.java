package com.bxnhub.web.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bxnhub.web.entities.ConfirmationToken;

@Repository("confirmationTokenRepository")
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Long>{
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
