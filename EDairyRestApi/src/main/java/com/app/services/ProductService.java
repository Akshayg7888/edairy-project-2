package com.app.services;

import java.util.List;

import com.app.dtos.AddProductDto;
import com.app.pojos.Product;

public interface ProductService {
	List<Product> getAllProduct();
	Product getProductById(Long productId);
	Product addProduct(AddProductDto addProductDto);
}