package com.example.potato;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class PotatoController {

	@Autowired
	PotatoService service;
	
	@Autowired
	PotatoRepository repo;
	@PostMapping("/postpotato")
	public Potato getPotato(@RequestBody Potato potato) {
		return service.savePotato(potato);
	}
	@PostMapping("/post")
	public List<Potato> addPotato(@RequestBody List<Potato> potato){
		return service.saveAllPotato(potato);
	}
	@GetMapping("/Get")
	public List<Potato> findAllPotato(){
		return service.getPotato();
	}
	@GetMapping("/Get/{id}")
	public Potato findStudentById(@PathVariable int id) {
		return service.getPotatoById(id);
	}
	@PutMapping("/put")
	public Potato putDetails(@RequestBody Potato potato) {
		return service.updatePotato(potato);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable int id) {
		return service.deletePotato(id);
	}
}
