package com.adventure.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.exception.CustomerException;
import com.adventure.model.Admin;
import com.adventure.model.Customer;
import com.adventure.repository.ActivityRespository;
import com.adventure.repository.AdminRespository;
import com.adventure.repository.CategoryRespository;
import com.adventure.repository.CustomerRespository;
import com.adventure.repository.TicketRespository;


@Service
public class CustomerServiceImplements implements CustomerServiceInterface {

	@Autowired
	private CustomerRespository customerRepositry;
	
	
	@Override
	public Customer rsegisterCustomer(Customer customer) {
		
		if(customer==null) throw new CustomerException("No Customer");
		
		return customerRepositry.save(customer);
	}

	@Override
	public Customer updateCustomer(Integer customerId, Admin customer) {
		
		return null;
	}

	@Override
	public void DeleteCustomer(Integer customerId) {
		
	}

	@Override
	public List<Customer> viewAllcustomer() {
		
		return null;
	}

	@Override
	public Customer validateCustomer(String username, String password) {
		
		return null;
	}

	@Override
	public Customer viewCustomerById(Integer customerId) {
		// TODO Auto-generated method stub
		return null;
	}

}
