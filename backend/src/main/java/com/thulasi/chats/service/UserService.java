package com.thulasi.chats.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thulasi.chats.entity.User;
import com.thulasi.chats.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User register(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
