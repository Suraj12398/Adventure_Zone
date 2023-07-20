package com.adventure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.adventure.service.CategoryServiceImplements;

@RestController
public class CategoryController {

    @Autowired
    private CategoryServiceImplements catService;
    
}
