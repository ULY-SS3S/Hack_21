package com.example.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name="User_Table")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private double rating;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Product> products;
}
