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

    /*
     * Admin
     */

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    /*
     * Customer Orders
     */

public List<Order> getOrdersByUser(Long userId) {
    return orderRepository.findByUserId(userId);
}
    /*
     * Single Order
     */

    public Optional<Order> getOrder(Long id) {
        return orderRepository.findById(id);
    }

    /*
     * Place Order
     */

    public Order placeOrder(Order order) {

        /*
         * Default Order Status
         */

        if (order.getStatus() == null || order.getStatus().isBlank()) {

            order.setStatus("PLACED");

        }

        /*
         * Default Payment Method
         */

        if (order.getPaymentMethod() == null
                || order.getPaymentMethod().isBlank()) {

            order.setPaymentMethod("COD");

        }

        return orderRepository.save(order);

    }

    /*
     * Update Order
     */

    public Order updateOrder(Long id, Order order) {

        order.setId(id);

        return orderRepository.save(order);

    }

    /*
     * Delete Order
     */

    public void deleteOrder(Long id) {

        orderRepository.deleteById(id);

    }

}
