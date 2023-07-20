package com.adventure.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;

import com.adventure.model.Customer;
import com.adventure.service.CustomerServiceImplements;

@RestController
public class CustomerController {

    @Autowired
    private CustomerServiceImplements cusService;

    @Autowired
    private PasswordEncoder pe;

    public ResponseEntity<Customer> rsegisterCustomer(Customer customer) {
        customer.setPassword(pe.encode(customer.getPassword()));
        Customer cus = cusService.rsegisterCustomer(customer);
        return new ResponseEntity<Customer>(cus, HttpStatus.CREATED);

    }

    public ResponseEntity<Customer> updateCustomer(Integer customerId, Customer customer) {
        Customer cus = cusService.updateCustomer(customerId, customer);
        return new ResponseEntity<Customer>(cus, HttpStatus.ACCEPTED);
    }

    public ResponseEntity<String> DeleteCustomer(Integer customerId) {
        Customer cus = cusService.DeleteCustomer(customerId);
        return new ResponseEntity<String>("customer is deleted", HttpStatus.ACCEPTED);
    }

    public ResponseEntity<List<Customer>> viewAllcustomer() {
        List<Customer> cusList = cusService.viewAllcustomer();
        return new ResponseEntity<List<Customer>>(cusList, HttpStatus.OK);
    }

    public ResponseEntity<Customer> viewCustomerById(Integer customerId) {
        Customer cus = cusService.viewCustomerById(customerId);
        return new ResponseEntity<Customer>(cus, HttpStatus.OK);
    }

    public ResponseEntity<Customer> validateCustomer(String username, String password) {
        Customer cus = cusService.validateCustomer(username, password);
        return new ResponseEntity<Customer>(cus, HttpStatus.CREATED);
    }

}
