package com.thulasi.chats.service;

import com.thulasi.chats.entity.MenuItem;
import com.thulasi.chats.repository.MenuRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public List<MenuItem> getAllFoods() {

        return menuRepository.findAll();

    }

    public MenuItem getFood(Long id) {

        return menuRepository.findById(id).orElse(null);

    }

    public MenuItem saveFood(MenuItem food) {

        return menuRepository.save(food);

    }

    public MenuItem updateFood(Long id, MenuItem updatedFood) {

        MenuItem existingFood =
                menuRepository.findById(id).orElse(null);

        if (existingFood == null) {

            return null;

        }

        /*
         * Delete old image only when
         * a different image is uploaded.
         */

        if (updatedFood.getImage() != null &&
                !updatedFood.getImage().isBlank() &&
                existingFood.getImage() != null &&
                !existingFood.getImage().equals(updatedFood.getImage())) {

            try {

                String oldFileName =
                        existingFood.getImage().replace("/images/", "");

                File oldImage = new File(
                        "uploads/" + oldFileName
                );

                if (oldImage.exists()) {

                    oldImage.delete();

                }

            } catch (Exception e) {

                e.printStackTrace();

            }

        }

        existingFood.setName(updatedFood.getName());

        existingFood.setDescription(updatedFood.getDescription());

        existingFood.setPrice(updatedFood.getPrice());

        existingFood.setAvailable(updatedFood.getAvailable());

        existingFood.setCategory(updatedFood.getCategory());

        /*
         * Keep old image if
         * user didn't upload new one.
         */

        if (updatedFood.getImage() != null &&
                !updatedFood.getImage().isBlank()) {

            existingFood.setImage(updatedFood.getImage());

        }

        return menuRepository.save(existingFood);

    }

    public void deleteFood(Long id) {

        MenuItem food =
                menuRepository.findById(id).orElse(null);

        if (food != null &&
                food.getImage() != null &&
                !food.getImage().isBlank()) {

            try {

                String fileName =
                        food.getImage().replace("/images/", "");

                File image = new File(
                        "uploads/" + fileName
                );

                if (image.exists()) {

                    image.delete();

                }

            } catch (Exception e) {

                e.printStackTrace();

            }

        }

        menuRepository.deleteById(id);

    }

}
