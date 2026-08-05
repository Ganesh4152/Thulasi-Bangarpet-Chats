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

    /*
     * Admin
     * View all orders
     */

    @GetMapping
    public List<Order> getOrders() {

        return orderService.getAllOrders();

    }

    /*
     * Customer
     * View only own orders
     */

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUser(

            @PathVariable Long userId

    ) {

        return orderService.getOrdersByUser(userId);

    }

    /*
     * Get Order By ID
     */

    @GetMapping("/{id}")
    public Optional<Order> getOrder(

            @PathVariable Long id

    ) {

        return orderService.getOrder(id);

    }

    /*
     * Place Order
     */

    @PostMapping
    public Order placeOrder(

            @RequestBody Order order

    ) {

        return orderService.placeOrder(order);

    }

    /*
     * Admin Update Status
     */

    @PutMapping("/{id}")
    public Order updateOrder(

            @PathVariable Long id,

            @RequestBody Order order

    ) {

        return orderService.updateOrder(

                id,

                order

        );

    }

    /*
     * Delete Order
     */

    @DeleteMapping("/{id}")
    public void deleteOrder(

            @PathVariable Long id

    ) {

        orderService.deleteOrder(id);

    }

}
