package com.adventure.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adventure.model.Customer;

public interface CustomerRespository extends JpaRepository<Customer, Integer> {
	
	public Optional<Customer> FindByEmail(String email);

}
