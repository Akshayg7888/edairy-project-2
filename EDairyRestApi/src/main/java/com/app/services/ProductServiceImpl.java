package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dtos.AddProductDto;
import com.app.pojos.Product;
import com.app.repositories.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Product> getAllProduct() {
		List<Product> listProducts = productRepo.findAll();
		return listProducts;
	}

	@Override
	public Product getProductById(Long productId) {
		if (productRepo.existsById(productId)) {
			Product product = productRepo.findById(productId).orElseThrow(() -> new RuntimeException("product Not Found"));
			return product;
		}
		return null;
	}

	@Override
	public Product addProduct(AddProductDto addProductDto) {
		Product newProduct = mapper.map(addProductDto, Product.class);
		productRepo.save(newProduct);
		return newProduct;
	}
}
