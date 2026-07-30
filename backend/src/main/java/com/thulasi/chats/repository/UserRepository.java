package com.thulasi.chats.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thulasi.chats.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
