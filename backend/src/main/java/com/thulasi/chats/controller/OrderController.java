package com.thulasi.chats.controller;

import com.thulasi.chats.entity.Order;
import com.thulasi.chats.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Optional<Order> getOrder(@PathVariable Long id) {
        return orderService.getOrder(id);
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return orderService.placeOrder(order);
    }

    @PutMapping("/{id}")
    public Order updateOrder(
            @PathVariable Long id,
            @RequestBody Order order) {

        return orderService.updateOrder(id, order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

}
