package com.thulasi.chats.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double totalAmount;

    private String status;

    @Column(length = 1000)
    private String items;

    /*
     * Customer who placed the order
     */

    @ManyToOne(fetch = FetchType.EAGER)

    @JoinColumn(name = "user_id")

    private User user;

    public Order() {
    }

    // ==========================
    // ID
    // ==========================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // ==========================
    // Total Amount
    // ==========================

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    // ==========================
    // Status
    // ==========================

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // ==========================
    // Items
    // ==========================

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    // ==========================
    // User
    // ==========================

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
