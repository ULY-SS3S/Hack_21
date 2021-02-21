package com.example.team2.controller;

import com.example.team2.entity.User;
import com.example.team2.repository.UserRepository;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/test")
    public String test() {
        return "Hi";
    }
    
    @PostMapping("/createUser")
    @JsonSerialize(using= ToStringSerializer.class)
    public String createUser(@RequestParam String username, @RequestParam String firstname, @RequestParam String lastname,
                             @RequestParam String email) {
        User user = new User(username,firstname,lastname,email);
        repository.save(user);
        return user.toString();
    }

    @GetMapping("/getUser")
    public User getUserById(@RequestParam Integer id){
        Optional<User> user = repository.findById(id);
        return user.orElse(null);
    }

    @GetMapping("/getUserByName")
    public String getUserByFirstName(@RequestParam String firstname){
        return repository.findByFirstname(firstname).get(0).toString();
    }

    @GetMapping("/getUserByUserName")
    public String getUserByUserName(@RequestParam String username){
        return repository.findByUsername(username).get(0).toString();
    }

    @GetMapping("/getUserByEmail")
    public String getUserByEmail(@RequestParam String email){
        return repository.findByEmail(email).get(0).toString();
    }

    @GetMapping("/getUserProducts")
    public String getUserProducts(@RequestParam Integer id){
        Optional<User> opt = repository.findById(id);
        if(opt.isPresent()){
            return opt.get().getProducts().toString();
        }
        else{
            return "";
        }
    }

}