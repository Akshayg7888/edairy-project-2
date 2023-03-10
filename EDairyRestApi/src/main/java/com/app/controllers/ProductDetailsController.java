package com.app.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AddProductDetailsDto;
import com.app.pojos.ProductDetails;
import com.app.services.ProductDetailsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/productDetails")
public class ProductDetailsController {

	@Autowired
	private ProductDetailsService productDetailsService;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JavaMailSender sender;
	
	@PostMapping("/add")
	public ResponseEntity<?> addProductDetails(@RequestBody AddProductDetailsDto productDetailsDto) {
		System.out.println(productDetailsDto);
		return new ResponseEntity<>(productDetailsService.addProductDetails(productDetailsDto), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getProductDetailsByProductId(@PathVariable("id") Long id) {
		List<ProductDetails> listProductDetails =productDetailsService.getAllProductDetails(id);
		return new ResponseEntity<>(listProductDetails, HttpStatus.OK);
	}
//	
//	@GetMapping("/{id}")
//	public ResponseEntity<?> getCourseById(@PathVariable("id") Long id) {
//		Course savedCourse = courseDetailsService.getCourseById(id);
//		return new ResponseEntity<>(savedCourse, HttpStatus.OK);
//	}
}
