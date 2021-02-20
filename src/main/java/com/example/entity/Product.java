package com.example.entity;

import org.hibernate.annotations.Entity;

import javax.persistence.Id;
import java.util.Date;

@Entity
public class Product {

    @Id
    private Long id;
    private Long userId;
    private Long imgId;
    private String description;
    private Date dateCreated;
    private Date datePurchased;
    private Long totalClicks;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getImgId() {
        return imgId;
    }

    public void setImgId(Long imgId) {
        this.imgId = imgId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Long getTotalClicks() {
        return totalClicks;
    }

    public void setTotalClicks(Long totalClicks) {
        this.totalClicks = totalClicks;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", userId=" + userId +
                ", imgId=" + imgId +
                ", description='" + description + '\'' +
                ", dateCreated=" + dateCreated +
                ", datePurchased=" + datePurchased +
                ", totalClicks=" + totalClicks +
                '}';
    }
}
