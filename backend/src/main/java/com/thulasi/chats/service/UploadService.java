package com.thulasi.chats.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;

@Service
public class UploadService {

    private static final String UPLOAD_DIR = "uploads";

    public String uploadImage(MultipartFile file) throws IOException {

        Files.createDirectories(Paths.get(UPLOAD_DIR));

        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path path = Paths.get(UPLOAD_DIR, filename);

        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

        return "/images/" + filename;
    }
}
