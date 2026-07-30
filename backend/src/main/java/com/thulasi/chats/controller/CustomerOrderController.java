package com.thulasi.chats.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.thulasi.chats.entity.CustomerOrder;
import com.thulasi.chats.service.CustomerOrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class CustomerOrderController {

    private final CustomerOrderService service;

    public CustomerOrderController(CustomerOrderService service) {
        this.service = service;
    }

    @GetMapping
    public List<CustomerOrder> getOrders() {
        return service.getOrders();
    }

    @GetMapping("/{id}")
    public CustomerOrder getOrder(@PathVariable Long id) {
        return service.getOrder(id);
    }

    @PostMapping
    public CustomerOrder placeOrder(@RequestBody CustomerOrder order) {
        return service.placeOrder(order);
    }
}
