package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dtos.AddProductDetailsDto;
import com.app.pojos.Product;
import com.app.pojos.ProductDetails;
import com.app.repositories.ProductDetailsRepository;
import com.app.repositories.ProductRepository;

@Service
@Transactional
public class ProductDetailsServiceImpl implements ProductDetailsService{

	@Autowired
	private ProductDetailsRepository productDetailsRepo;

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ProductDetails addProductDetails(AddProductDetailsDto addproductDetailsDto) {

		Product product = productRepo.findById(addproductDetailsDto.getProductId()).orElseThrow(() -> new RuntimeException("product Not Found"));
		ProductDetails productDetails = mapper.map(addproductDetailsDto, ProductDetails.class);
		System.out.println("before the set"+productDetails);
		productDetails.setProduct(product);
		System.out.println("before the save "+productDetails);
		productDetailsRepo.save(productDetails);
		System.out.println("before the returns "+productDetails);
		return productDetails;
	}

	@Override
	public List<ProductDetails> getAllProductDetails(Long id) {
		Product product = productRepo.findById(id).orElseThrow(() -> new RuntimeException("product Not Found"));
		List<ProductDetails> listProductDetails = productDetailsRepo.findAllByProduct(product);
		return listProductDetails;
	}

}
