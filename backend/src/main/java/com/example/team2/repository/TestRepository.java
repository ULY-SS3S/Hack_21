package com.example.team2.repository;

import com.example.team2.entity.Test;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface TestRepository extends CrudRepository<Test, Integer> {
}
