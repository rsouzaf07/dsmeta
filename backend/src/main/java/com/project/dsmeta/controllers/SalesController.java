package com.project.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.dsmeta.entities.Sales;
import com.project.dsmeta.services.SalesService;

@RestController
@RequestMapping(value= "/sales")
public class SalesController {
	
	@Autowired
	private SalesService service;
	
	@GetMapping
	public List<Sales> findSales() {
		return service.findSales();
	}
}
