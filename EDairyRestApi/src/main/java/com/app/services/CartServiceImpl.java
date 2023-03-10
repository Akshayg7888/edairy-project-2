package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dtos.AddProductToCartDto;
import com.app.pojos.Cart;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repositories.CartRepository;
import com.app.repositories.ProductRepository;
import com.app.repositories.UserRepository;

@Service
@Transactional
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public String addProductToCart(AddProductToCartDto productToCartDto) {
		Cart cart = cartRepo.findById(productToCartDto.getCartId()).orElseThrow(() -> new RuntimeException("Cart not found"));
		Product product = productRepo.findById(productToCartDto.getProductId()).orElseThrow(() -> new RuntimeException("Course not found"));
		if(cart.addCourseToCart(product)) {
			cart.setNoItems(cart.getNoItems()+1);
			cart.setCartTotal(cart.getCartTotal()+product.getPrice());
			cartRepo.save(cart);
		}
		return "Course Added to Cart Successfully.";
	}

	@Override
	public List<Product> getProductInCartByUserId(Long userid) {
		User user = userRepo.findById(userid).orElseThrow(() -> new RuntimeException("User not found"));
		List<Product> product = user.getCart().getCartProducts();
		return product;
	}

	@Override
	public Long getCartTotalByUserId(Long userid) {
		User user = userRepo.findById(userid).orElseThrow(() -> new RuntimeException("User not found"));
		Long cartTotal = (long) user.getCart().getCartTotal();
		return cartTotal;
	}	
}