package com.thulasi.chats.controller;

import com.thulasi.chats.entity.MenuItem;
import com.thulasi.chats.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")

@CrossOrigin(origins = "*")

public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping
    public List<MenuItem> getAllFoods() {

        return menuService.getAllFoods();

    }

    @GetMapping("/{id}")
    public MenuItem getFood(@PathVariable Long id) {

        return menuService.getFood(id);

    }

    @PostMapping
    public MenuItem addFood(

            @RequestBody MenuItem item

    ) {

        return menuService.saveFood(item);

    }

    @PutMapping("/{id}")
    public MenuItem updateFood(

            @PathVariable Long id,

            @RequestBody MenuItem item

    ) {

        return menuService.updateFood(id, item);

    }

    @DeleteMapping("/{id}")
    public void deleteFood(

            @PathVariable Long id

    ) {

        menuService.deleteFood(id);

    }

}
