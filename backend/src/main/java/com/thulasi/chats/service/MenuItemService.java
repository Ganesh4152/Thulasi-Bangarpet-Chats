package com.thulasi.chats.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thulasi.chats.entity.MenuItem;
import com.thulasi.chats.repository.MenuItemRepository;

@Service
public class MenuItemService {

    private final MenuItemRepository repository;

    public MenuItemService(MenuItemRepository repository) {
        this.repository = repository;
    }

    public List<MenuItem> getMenu() {
        return repository.findAll();
    }

    public MenuItem save(MenuItem item) {
        return repository.save(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
