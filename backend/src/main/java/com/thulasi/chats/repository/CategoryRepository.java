package com.thulasi.chats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thulasi.chats.entity.Category;

public interface CategoryRepository
        extends JpaRepository<Category, Long> {

}
