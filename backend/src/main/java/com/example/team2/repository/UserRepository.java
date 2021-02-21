package com.example.team2.repository;
import com.example.team2.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    List<User> findByFirstname(String firstname);
    List<User> findByEmail(String email);
    List<User> findByUsername(String username);
}
