package com.thulasi.chats.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {

        this.jwtFilter = jwtFilter;

    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {

        http

                .csrf(csrf -> csrf.disable())

                .cors(Customizer.withDefaults())

                .sessionManagement(session ->

                        session.sessionCreationPolicy(

                                SessionCreationPolicy.STATELESS

                        )

                )

                .authorizeHttpRequests(auth -> auth

                        /*
                         * Public APIs
                         */

                        .requestMatchers(

                                "/api/users/login",
                                "/api/users/register",
                                "/api/upload/**",
                                "/images/**"

                        ).permitAll()

                        /*
                         * Public Menu APIs
                         */

                        .requestMatchers(

                                "/api/menu/**",
                                "/api/categories/**"

                        ).permitAll()

                        /*
                         * Customer + Admin APIs
                         */

                        .requestMatchers(

                                "/api/orders/**"

                        ).hasAnyRole(

                                "CUSTOMER",
                                "ADMIN"

                        )

                        /*
                         * Future Admin APIs
                         */

                        .requestMatchers(

                                "/api/admin/**"

                        ).hasRole(

                                "ADMIN"

                        )

                        /*
                         * Everything else requires authentication
                         */

                        .anyRequest()

                        .authenticated()

                )

                .addFilterBefore(

                        jwtFilter,

                        UsernamePasswordAuthenticationFilter.class

                );

        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(

            AuthenticationConfiguration configuration

    ) throws Exception {

        return configuration.getAuthenticationManager();

    }

}
