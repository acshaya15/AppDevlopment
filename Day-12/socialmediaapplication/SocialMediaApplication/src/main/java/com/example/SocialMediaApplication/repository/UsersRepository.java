package com.example.SocialMediaApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SocialMediaApplication.model.Users;
public interface UsersRepository extends JpaRepository<Users,Long> {

}
