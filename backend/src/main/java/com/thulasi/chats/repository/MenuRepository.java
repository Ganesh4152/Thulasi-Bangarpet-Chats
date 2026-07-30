package com.thulasi.chats.repository;

import com.thulasi.chats.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<MenuItem, Long> {
}
