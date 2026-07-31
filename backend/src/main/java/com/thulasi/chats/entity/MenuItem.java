package com.thulasi.chats.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double price;

    private String image;

    @Column(length = 1000)
    private String description;

    private Boolean available;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public MenuItem() {
    }

    // ======================
    // ID
    // ======================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // ======================
    // Name
    // ======================

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // ======================
    // Price
    // ======================

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    // ======================
    // Image
    // ======================

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    // ======================
    // Description
    // ======================

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // ======================
    // Available
    // ======================

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    // ======================
    // Category
    // ======================

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
