package com.example.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.sql.Blob;

@Data
@NoArgsConstructor
@Entity
@Table(name="Image")
public class Image {

    //The ID Used to reference product
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private Blob img;

}
