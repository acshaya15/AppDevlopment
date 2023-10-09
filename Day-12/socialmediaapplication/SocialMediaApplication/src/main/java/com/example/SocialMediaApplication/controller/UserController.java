package com.example.SocialMediaApplication.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.SocialMediaApplication.model.Users;
import com.example.SocialMediaApplication.repository.UsersRepository;
@CrossOrigin("*")
 @RestController
public class UserController {
	@Autowired
	UsersRepository u1;
	@GetMapping("/getuser")
	public List<Users>getDetails(){
		return u1.findAll();
	}
	@PostMapping("/postuser")
	public String postdetails(@RequestBody Users u) {
		u1.save(u);
		return "details saved successfully";
	}
	@DeleteMapping("/deleteuser")
	public String deletedetails(@PathVariable("id") Long id) {
		u1.deleteById(id);
		return "deleted successfully";
	}
	@PutMapping("/updateusers")
	public Users putDetails(@PathVariable Long id,@RequestBody Users entity) {
		Users existinguserentity =u1.findById(id).orElse(null);
		existinguserentity.setUserimg(entity.getUserimg());
		existinguserentity.setUsername(entity.getUsername());
		existinguserentity.setName(entity.getName());
		existinguserentity.setBio(entity.getBio());
		return u1.save(existinguserentity);
	}
}
