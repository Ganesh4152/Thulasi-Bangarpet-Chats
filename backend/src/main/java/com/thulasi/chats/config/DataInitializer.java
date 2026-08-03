package com.thulasi.chats.config;


import com.thulasi.chats.entity.Category;
import com.thulasi.chats.entity.MenuItem;
import com.thulasi.chats.entity.User;

import com.thulasi.chats.repository.CategoryRepository;
import com.thulasi.chats.repository.MenuRepository;
import com.thulasi.chats.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
public class DataInitializer implements CommandLineRunner {


    private final CategoryRepository categoryRepository;

    private final MenuRepository menuRepository;

    private final UserRepository userRepository;



    public DataInitializer(
            CategoryRepository categoryRepository,
            MenuRepository menuRepository,
            UserRepository userRepository
    ) {

        this.categoryRepository = categoryRepository;
        this.menuRepository = menuRepository;
        this.userRepository = userRepository;

    }



    @Override
    public void run(String... args) throws Exception {


        System.out.println("==============================");
        System.out.println(" DATABASE INITIALIZER START ");
        System.out.println("==============================");



        Category category;



        // ============================
        // CATEGORY CREATION
        // ============================


        if(categoryRepository.count() == 0) {


            category = new Category();

            category.setName("Chats");

            category.setImage("chats.jpg");


            categoryRepository.save(category);


            System.out.println("Default category created");


        }
        else {


            category = categoryRepository.findAll()
                    .get(0);


            System.out.println(
                "Existing category found. Keeping data."
            );

        }





        // ============================
        // MENU CREATION
        // ============================


        if(menuRepository.count() == 0) {


            createMenu(
                "Masala Puri",
                60,
                "/images/masala-puri.jpg",
                "Spicy Bangarpet Style Masala Puri",
                category
            );


            createMenu(
                "Dahi Puri",
                70,
                "/images/dahi-puri.jpg",
                "Crispy Puri with Curd",
                category
            );


            createMenu(
                "Pani Puri",
                50,
                "/images/pani-puri.jpg",
                "Famous Bangarpet Pani Puri",
                category
            );


            createMenu(
                "Sev Puri",
                65,
                "/images/sev-puri.jpg",
                "Crispy Sev Puri",
                category
            );


            createMenu(
                "Bhel Puri",
                65,
                "/images/bhel-puri.jpg",
                "Bombay Style Bhel",
                category
            );


            createMenu(
                "Samosa Chaat",
                80,
                "/images/samosa-chaat.jpg",
                "Hot Samosa with Chaat",
                category
            );


            createMenu(
                "Aloo Tikki",
                75,
                "/images/aloo-tikki.jpg",
                "Crispy Potato Tikki",
                category
            );


            createMenu(
                "Ragda Pattice",
                85,
                "/images/ragda-pattice.jpg",
                "Ragda with Potato Patties",
                category
            );


            createMenu(
                "Papdi Chaat",
                80,
                "/images/papdi-chaat.jpg",
                "Papdi topped with curd and chutney",
                category
            );


            System.out.println(
                "Default menu items created"
            );


        }
        else {


            System.out.println(
                "Existing menu found. Keeping data."
            );

        }





        // ============================
        // USER CHECK
        // ============================


        System.out.println(
            "Users count : "
            + userRepository.count()
        );



        System.out.println("==============================");
        System.out.println(" DATABASE INITIALIZER END ");
        System.out.println("==============================");


    }





    private void createMenu(
            String name,
            double price,
            String image,
            String description,
            Category category
    ){


        MenuItem item = new MenuItem();


        item.setName(name);

        item.setPrice(price);

        item.setImage(image);

        item.setDescription(description);

        item.setAvailable(true);

        item.setCategory(category);



        menuRepository.save(item);

    }


}
