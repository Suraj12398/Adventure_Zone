package com.adventure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.adventure.service.ActivityServiceImplements;

@RestController
public class ActivityController {

    @Autowired
    private ActivityServiceImplements actService;
    
}
