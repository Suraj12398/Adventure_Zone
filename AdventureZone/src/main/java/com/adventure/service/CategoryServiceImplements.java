package com.adventure.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.model.Category;
import com.adventure.repository.AdminRespository;
import com.adventure.repository.CategoryRespository;


@Service
public class CategoryServiceImplements implements CategoryServiceInterface {

	@Autowired
	private CategoryRespository categoryRepositry;
	
	@Override
	public Category addCategory(Category category) {
		
		return null;
	}

	@Override
	public Category updateCategory(Integer categoryId, Category category) {
		
		return null;
	}

	@Override
	public void DeleteCategory(Integer categoryId) {
		

	}

	@Override
	public List<Category> viewAllcategory() {
		
		return null;
	}

}
