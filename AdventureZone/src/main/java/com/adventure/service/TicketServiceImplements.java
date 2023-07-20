package com.adventure.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adventure.model.Ticket;
import com.adventure.repository.TicketRespository;


@Service
public class TicketServiceImplements implements TicketServiceInterface {

	@Autowired
	private TicketRespository ticketRepositry;
	
	@Override
	public Ticket generateTicket(Ticket ticket) {
		
		return null;
	}

	@Override
	public Ticket updateTicket(Integer ticketId, Ticket ticket) {
		
		return null;
	}

	@Override
	public void DeleteTicket(Integer ticketId) {
		

	}

	@Override
	public List<Ticket> viewAllticket() {
		
		return null;
	}

}
