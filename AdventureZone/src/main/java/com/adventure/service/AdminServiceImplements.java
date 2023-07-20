package com.adventure.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.model.Admin;
import com.adventure.repository.AdminRespository;


@Service
public class AdminServiceImplements implements AdminServiceInterface {

	@Autowired
	private AdminRespository adminRepositry;
	
	
	@Override
	public Admin rsegisterAdmin(Admin admin) {
		
		return null;
	}

	@Override
	public Admin updateAdmin(Integer adminId, Admin admin) {
		
		return null;
	}

	@Override
	public void DeleteAdmin(Integer adminId) {
		

	}

	@Override
	public List<Admin> viewAlladmin() {
		
		return null;
	}

}
