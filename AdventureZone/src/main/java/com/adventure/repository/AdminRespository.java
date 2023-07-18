package com.adventure.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adventure.model.Admin;
import com.adventure.model.Customer;


public interface AdminRespository extends JpaRepository<Admin, Integer> {
	
	public Optional<Admin> FindByEmail(String email);

}