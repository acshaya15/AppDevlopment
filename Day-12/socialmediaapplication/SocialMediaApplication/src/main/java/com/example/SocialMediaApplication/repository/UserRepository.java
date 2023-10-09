package com.example.SocialMediaApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SocialMediaApplication.model.User;

public interface UserRepository extends JpaRepository<User,String>{

   
    
}
