package com.example.SocialMediaApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SocialMediaApplication.model.Posts;

public interface PostsRepository extends JpaRepository<Posts, Long>{

}
