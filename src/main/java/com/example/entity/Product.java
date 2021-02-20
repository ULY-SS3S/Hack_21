package com.example.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name="Product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
    private String title;
    private String productDescription;
    private Date dateCreated;
    private Date datePurchased;
    private int totalClicks;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private List<Image> images;

}
