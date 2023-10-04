package com.example.potato;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PotatoService {
	
	@Autowired
	PotatoRepository repository;
	
	
	public Potato savePotato(Potato potato) {
		return repository.save(potato);
	}
	public List<Potato> saveAllPotato(List<Potato> potato){
		return repository.saveAll(potato);
	}
	public List<Potato> getPotato(){
		return repository.findAll();
	}
	public Potato getPotatoById(int id) {
		return repository.findById(id).orElse(null);
	}
	public String deletePotato(int id) {
		 repository.deleteById(id);
		 return "Student detail of "+ id + "deleted";
	}
	public Potato updatePotato(Potato potato) {
		Potato existingPotato=repository.findById(potato.getId()).orElse(null);
		existingPotato.setId(potato.getId());
		existingPotato.setUsername(potato.getUsername());
		existingPotato.setPassword(potato.getPassword());
		return repository.save(existingPotato);
		
	}
}
