package com.app.services;

import java.util.List;

import com.app.dtos.AddProductToCartDto;
import com.app.pojos.Product;

public interface CartService {
	String addProductToCart(AddProductToCartDto productToCartDto);
	List<Product> getProductInCartByUserId(Long userid);
	Long getCartTotalByUserId(Long userid);
}
