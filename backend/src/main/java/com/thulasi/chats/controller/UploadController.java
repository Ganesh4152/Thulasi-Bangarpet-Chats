package com.thulasi.chats.controller;

import com.thulasi.chats.service.UploadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")
public class UploadController {

    private final UploadService uploadService;

    public UploadController(UploadService uploadService) {
        this.uploadService = uploadService;
    }

    @PostMapping
    public ResponseEntity<?> uploadImage(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String imagePath = uploadService.uploadImage(file);

        return ResponseEntity.ok(
                Map.of(
                        "image", imagePath
                )
        );
    }
}
