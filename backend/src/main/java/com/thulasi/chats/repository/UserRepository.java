package com.thulasi.chats.repository;

import com.thulasi.chats.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
