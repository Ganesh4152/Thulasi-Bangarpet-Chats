package com.thulasi.chats.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thulasi.chats.dto.LoginResponse;
import com.thulasi.chats.entity.User;
import com.thulasi.chats.repository.UserRepository;
import com.thulasi.chats.security.JwtUtil;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public UserService(
            UserRepository userRepository,
            JwtUtil jwtUtil
    ) {

        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;

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

    public LoginResponse login(
            String email,
            String password
    ) {

        User user = userRepository
                .findByEmail(email)
                .orElse(null);

        if (user == null) {

            return null;

        }

        if (!user.getPassword().equals(password)) {

            return null;

        }

        String token = jwtUtil.generateToken(
                user.getEmail(),
                user.getRole()
        );

        return new LoginResponse(

                user.getId(),

                user.getName(),

                user.getEmail(),

                user.getPhone(),

                user.getRole(),

                token

        );

    }

}
