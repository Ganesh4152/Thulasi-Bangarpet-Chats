package com.thulasi.chats.service;

import com.thulasi.chats.entity.Order;
import com.thulasi.chats.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrder(Long id) {
        return orderRepository.findById(id);
    }

    public Order placeOrder(Order order) {

        if (order.getStatus() == null || order.getStatus().isEmpty()) {
            order.setStatus("PLACED");
        }

        return orderRepository.save(order);
    }

    public Order updateOrder(Long id, Order order) {

        order.setId(id);

        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

}
