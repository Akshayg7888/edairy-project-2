package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

@Entity(name="carts")
public class Cart extends BaseEntity {

	private double cartTotal;
	private int noItems;
	
	@OneToOne
	@JoinColumn(name = "userId", nullable = true)
	private User user;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(
	        name = "Cart_Product", 
	        joinColumns = { @JoinColumn(name = "cartId") }, 
	        inverseJoinColumns = {@JoinColumn(name = "productId")})
	private List<Product> cartProducts = new ArrayList<>();
	
	public boolean addCourseToCart(Product product) {
		if(!cartProducts.contains(product)) { 
			this.cartProducts.add(product);
			return true;
		}
		return false;
	}
	
	public void emptyCartCourses() {
		this.cartTotal = 0;
		this.noItems = 0;
		cartProducts.clear();
	}


	public Cart() {
		super();
		this.cartTotal = 0;
		this.noItems = 0;
	}

	public Cart(double cartTotal, int noItems, User user, List<Product> cartProducts) {
		super();
		this.cartTotal = cartTotal;
		this.noItems = noItems;
		this.user = user;
		this.cartProducts = cartProducts;
	}

	public double getCartTotal() {
		return cartTotal;
	}

	public void setCartTotal(double cartTotal) {
		this.cartTotal = cartTotal;
	}

	public int getNoItems() {
		return noItems;
	}

	public void setNoItems(int noItems) {
		this.noItems = noItems;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Product> getCartProducts() {
		return cartProducts;
	}

	public void setCartProducts(List<Product> cartProducts) {
		this.cartProducts = cartProducts;
	}
}