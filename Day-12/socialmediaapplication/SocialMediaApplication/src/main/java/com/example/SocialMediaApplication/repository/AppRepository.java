package com.example.SocialMediaApplication.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SocialMediaApplication.model.App;
@Repository
public interface AppRepository extends JpaRepository<App,Long> {


}