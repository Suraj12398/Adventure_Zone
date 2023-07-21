package com.adventure.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.adventure.model.Activity;
import com.adventure.model.Admin;

public interface AdminServiceInterface {
	
	public Admin rsegisterAdmin(Admin admin);
	public Admin updateAdmin(Integer adminId,Admin admin);
	public void DeleteAdmin(Integer adminId);
	public List<Admin> viewAlladmin();
	public List<Activity> viewAllactivity();
	public List<Activity> viewAllactivityCustomerwise(Integer customerId);
	public List<Activity> viewAllactivitydatewise(LocalDate date);
	public List<Activity> viewAllactivityforDays(Integer customerId,LocalDateTime fromDate,LocalDateTime enddate);

}
