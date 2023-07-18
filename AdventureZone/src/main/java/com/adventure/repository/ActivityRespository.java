package com.adventure.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adventure.model.Activity;


public interface ActivityRespository  extends JpaRepository<Activity, Integer> {

}
