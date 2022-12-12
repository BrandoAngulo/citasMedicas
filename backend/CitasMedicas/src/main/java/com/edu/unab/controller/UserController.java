package com.edu.unab.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.edu.unab.model.collection.User;
import com.edu.unab.model.service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000/", methods = {RequestMethod.POST, RequestMethod.DELETE,RequestMethod.GET})
public class UserController {
	
	@Autowired
	UserService userService; 
	
	@GetMapping()
	public List<User>getAllUser(){
		return userService.getAllUser();
	}
	
	@GetMapping("/{id}")
	public Optional<User> getUserById(@PathVariable("id") String id){
		return userService.getUserById(id);
	}
	
	@PostMapping()
	public User SaveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@DeleteMapping(path = "/{id}")
    public String deleteUserById(@PathVariable("id") String id){
        return userService.deleteUser(id); 
    }
}
