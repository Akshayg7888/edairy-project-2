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

import com.app.dtos.AddProductDto;
import com.app.pojos.Product;
import com.app.services.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JavaMailSender sender;
	
	@PostMapping("/add")
	public ResponseEntity<?> addProduct(@RequestBody AddProductDto productdto) {
		return new ResponseEntity<>(productService.addProduct(productdto), HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<?> getProductList() {
		List<Product> listProduct= productService.getAllProduct();
		return new ResponseEntity<>(listProduct, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable("id") Long id) {
		Product savedCourse = productService.getProductById(id);
		return new ResponseEntity<>(savedCourse, HttpStatus.OK);
	}
}
