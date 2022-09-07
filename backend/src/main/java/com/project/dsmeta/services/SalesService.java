package com.project.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dsmeta.entities.Sales;
import com.project.dsmeta.repositories.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
	SalesRepository salesRepository;
	
	public List<Sales> findSales() {
		return salesRepository.findAll(); 
	}

}
