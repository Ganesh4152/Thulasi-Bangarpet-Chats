package com.thulasi.chats.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thulasi.chats.entity.CustomerOrder;
import com.thulasi.chats.repository.CustomerOrderRepository;

@Service
public class CustomerOrderService {

    private final CustomerOrderRepository repository;

    public CustomerOrderService(CustomerOrderRepository repository) {
        this.repository = repository;
    }

    public List<CustomerOrder> getOrders() {
        return repository.findAll();
    }

    public CustomerOrder placeOrder(CustomerOrder order) {
        return repository.save(order);
    }

    public CustomerOrder getOrder(Long id) {
        return repository.findById(id).orElse(null);
    }
}
