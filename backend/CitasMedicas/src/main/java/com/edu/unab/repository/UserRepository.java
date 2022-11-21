package com.edu.unab.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edu.unab.model.collection.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

}
