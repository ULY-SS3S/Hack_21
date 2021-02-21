package com.example.team2.controller;

import com.example.team2.entity.Product;
import com.example.team2.entity.User;
import com.example.team2.repository.ProductRepository;
import com.example.team2.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductRepository repository;
    private final UserRepository userRepository;

    public ProductController(ProductRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    @PostMapping("/save")
    @JsonManagedReference
    public Product saveProduct(@RequestParam Integer user_id,
                              @RequestParam Double price,
                              @RequestParam String title, @RequestParam String productDescription,
                              @RequestParam Integer year, @RequestParam Integer month, @RequestParam Integer day) {
        Calendar c = Calendar.getInstance();
        c.set(year, month - 1, day, 0, 0);
        Date datePurchased = c.getTime();
        User currUser = userRepository.findById(user_id).get();
        Product product = new Product(currUser,user_id,price,title,productDescription,datePurchased,0);
        Product copy = new Product(currUser,user_id,price,title,productDescription,datePurchased,0);
        currUser.addProduct(product);
        repository.save(product);
        copy.setUser(null);
        copy.setId(product.getId());
        System.out.println(copy.getId());
        return product;
    }

    @GetMapping("/getAll")
    @JsonManagedReference
    public Iterable<Product> getAll(){
        Iterable<Product> result = repository.findAll();
        return result;
    }

    @GetMapping("/getById")
    public Iterable<Product> getById(@RequestParam Integer id){
        return userRepository.findById(id).get().getProducts();
    }

    @GetMapping("/getByUserName")
    public Iterable<Product> getByUserName(@RequestParam String username){
        List<User> user = userRepository.findByUsername(username);
        return (user.size()==0)?null:user.get(0).getProducts();
    }

    }