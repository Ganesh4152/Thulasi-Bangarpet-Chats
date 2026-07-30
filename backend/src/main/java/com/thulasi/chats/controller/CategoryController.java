package com.thulasi.chats.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.thulasi.chats.entity.Category;
import com.thulasi.chats.service.CategoryService;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return service.save(category);
    }
}
