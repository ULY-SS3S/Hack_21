package com.example.team2.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Product")
public class Product {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO) // GenerationType
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;
    private Integer userIdCopy;
    private Double price;
    private String title;
    private String productDescription;
    private Date dateCreated;
    private Date datePurchased;
    private Integer totalClicks;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private List<Image> images;

    public Product(Integer id, Integer userIdCopy, User user, Double price, String title, String productDescription, Date dateCreated, Date datePurchased, Integer totalClicks, List<Image> images) {
        this.id = id;
        this.userIdCopy = userIdCopy;
        this.user = user;
        this.price = price;
        this.title = title;
        this.productDescription = productDescription;
        this.dateCreated = dateCreated;
        this.datePurchased = datePurchased;
        this.totalClicks = totalClicks;
        this.images = images;
    }

    public Product(User user, Integer userIdCopy, Double price, String title, String productDescription, Date datePurchased, Integer totalClicks) {
        this.user = user;
        this.userIdCopy = userIdCopy;
        this.price = price;
        this.title = title;
        this.productDescription = productDescription;
        this.dateCreated = new java.sql.Date(Calendar.getInstance().getTimeInMillis());;
        this.datePurchased = datePurchased;
        this.totalClicks = totalClicks;
    }

    public Product() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getDatePurchased() {
        return datePurchased;
    }

    public void setDatePurchased(Date datePurchased) {
        this.datePurchased = datePurchased;
    }

    public Integer getTotalClicks() {
        return totalClicks;
    }

    public void setTotalClicks(Integer totalClicks) {
        this.totalClicks = totalClicks;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getuserIdCopy() {
        return userIdCopy;
    }

    public void setuserIdCopy(Integer userIdCopy) {
        this.userIdCopy = userIdCopy;
    }
}

