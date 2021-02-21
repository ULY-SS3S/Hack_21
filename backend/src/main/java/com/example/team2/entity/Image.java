package com.example.team2.entity;


import javax.persistence.*;
import java.sql.Blob;

@Entity
public class Image {

    //The ID Used to reference product
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private Blob img;

    public Image(Product product, Integer id, Blob img) {
        this.product = product;
        this.id = id;
        this.img = img;
    }
}
