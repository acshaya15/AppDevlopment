package com.example.potato;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="post")
public class Post {
	@Id
	int id;
	public Post(int id, Blob image) {
		super();
		this.id = id;
		this.image = image;
	}

	@Lob
	private Blob image;
	 public Blob getImage() {
		return image;
	}

	public void setImage(Blob blob) {
		this.image = blob;
	}


	public Post() {
		super();
	}

}
