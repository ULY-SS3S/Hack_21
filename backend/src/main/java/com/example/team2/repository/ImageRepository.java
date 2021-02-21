package com.example.team2.repository;

import com.example.team2.entity.Image;
import com.example.team2.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, Integer> {

}
