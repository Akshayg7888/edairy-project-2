package com.app.services;

import java.util.List;

import com.app.dtos.AddProductDetailsDto;
import com.app.pojos.ProductDetails;

public interface ProductDetailsService {
	ProductDetails addProductDetails(AddProductDetailsDto addProductDetailsDto);
	
	List<ProductDetails> getAllProductDetails(Long id);
	
	
	
}
