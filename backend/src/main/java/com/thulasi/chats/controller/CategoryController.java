package com.thulasi.chats.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.thulasi.chats.entity.Category;
import com.thulasi.chats.service.CategoryService;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins="*")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Category> getAllCategories() {

        return service.getAllCategories();

    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable Long id) {

        return service.getCategory(id);

    }

    @PostMapping
    public Category createCategory(
            @RequestBody Category category) {

        return service.saveCategory(category);

    }

    @PutMapping("/{id}")
    public Category updateCategory(
            @PathVariable Long id,
            @RequestBody Category category) {

        return service.updateCategory(id, category);

    }

    @DeleteMapping("/{id}")
    public void deleteCategory(
            @PathVariable Long id) {

        service.deleteCategory(id);

    }

}
