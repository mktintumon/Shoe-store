package com.bxnhub.web.Repository;

import com.bxnhub.web.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    public User findById(int userId);
    public User findByEmail(String email);
    public User findByEmailAndPassword(String email , String password);
    Boolean existsByEmail(String email);
}
