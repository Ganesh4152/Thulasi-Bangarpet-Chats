package com.thulasi.chats.repository;

import com.thulasi.chats.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
