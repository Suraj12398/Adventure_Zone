package com.adventure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.adventure.service.ActivityServiceImplements;
import com.adventure.service.AdminServiceImplements;

@RestController
public class AdminController {

    @Autowired
    private AdminServiceImplements adminService;
    
}
