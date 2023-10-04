package com.example.potato;


import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class PostService {
	
	@Autowired
	PostRepository repo;
	
	public ResponseEntity<byte[]> displayImage(int id) throws IOException, SQLException
    {
        Post image = repo.findById(id).orElse(null);
        byte [] imageBytes = null;
        imageBytes = image.getImage().getBytes(1,(int) image.getImage().length());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    }
	public String addImagePost(HttpServletRequest request, MultipartFile file) throws IOException, SerialException, SQLException
    {
        byte[] bytes = file.getBytes();
        Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);

        Post image = new Post();
        image.setImage(blob);
        repo.save(image);
        return "redirect:/";
    }
}

