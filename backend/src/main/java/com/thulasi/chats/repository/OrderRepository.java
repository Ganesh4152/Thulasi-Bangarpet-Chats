package com.thulasi.chats.repository;

import com.thulasi.chats.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    /*
     * Find all orders of one customer
     */

    List<Order> findByUserId(Long userId);

}
