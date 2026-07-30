package com.thulasi.chats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thulasi.chats.entity.CustomerOrder;

public interface CustomerOrderRepository
        extends JpaRepository<CustomerOrder, Long> {

}
