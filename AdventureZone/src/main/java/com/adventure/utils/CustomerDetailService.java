package com.adventure.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.adventure.model.Customer;
import com.adventure.repository.CustomerRespository;

@Service
public class CustomerDetailService implements UserDetailsService{

	@Autowired
	private CustomerRespository customerRepositry;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<Customer> customer = customerRepositry.findByEmail(username) ;
		if(customer.isEmpty()) throw new UsernameNotFoundException("user not found") ;
		Customer us = customer.get() ;

		List<GrantedAuthority> authorities = new ArrayList<>() ;
		SimpleGrantedAuthority autho = new SimpleGrantedAuthority(us.getRole().toUpperCase()) ;
		authorities.add(autho) ;
		org.springframework.security.core.userdetails.User secUser = new org.springframework.security.core.userdetails.User(us.getEmail(), us.getPassword(),  authorities) ;
		return secUser ;
	}

}
