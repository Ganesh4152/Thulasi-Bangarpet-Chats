package com.thulasi.chats.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thulasi.chats.entity.Category;
import com.thulasi.chats.repository.CategoryRepository;

@Service
public class CategoryService {

    private final CategoryRepository repository;

    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public List<Category> getAllCategories() {
        return repository.findAll();
    }

    public Category save(Category category) {
        return repository.save(category);
    }
}
