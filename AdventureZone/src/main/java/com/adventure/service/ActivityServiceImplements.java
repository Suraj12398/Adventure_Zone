package com.adventure.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.model.Activity;
import com.adventure.repository.ActivityRespository;
import com.adventure.repository.CategoryRespository;


@Service
public class ActivityServiceImplements implements ActivityServiceInterface {

	@Autowired
	private ActivityRespository activityRepositry;
	
	@Override
	public Activity addActivity(Activity activity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Activity updateActivity(Integer activityId, Activity activity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void DeleteActivity(Integer activityId) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Activity> viewAllactivity() {
		// TODO Auto-generated method stub
		return null;
	}

}
