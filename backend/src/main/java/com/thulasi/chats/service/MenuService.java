package com.thulasi.chats.service;

import com.thulasi.chats.entity.MenuItem;
import com.thulasi.chats.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }

    public Optional<MenuItem> getMenuItemById(Long id) {
        return menuRepository.findById(id);
    }

    public MenuItem createMenuItem(MenuItem menuItem) {
        return menuRepository.save(menuItem);
    }

    public MenuItem updateMenuItem(Long id, MenuItem menuItem) {
        menuItem.setId(id);
        return menuRepository.save(menuItem);
    }

    public void deleteMenuItem(Long id) {
        menuRepository.deleteById(id);
    }
}
