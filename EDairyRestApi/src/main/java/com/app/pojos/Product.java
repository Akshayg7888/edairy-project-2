package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "products")
public class Product extends BaseEntity {
	private String productName;
	private double price;
	private int in_stock;
	private String description;
	private String imagePath;
	@ManyToMany(mappedBy = "userProducts")
	@JsonIgnore
	private List<User> users = new ArrayList<>();
	
	@ManyToMany(mappedBy = "cartProducts")
	@JsonIgnore
	private List<Cart> cart = new ArrayList<>();
	
	@ManyToMany(mappedBy = "orderProducts")
	@JsonIgnore
	private List<Order> order = new ArrayList<>();
	
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL,
			fetch=FetchType.LAZY, orphanRemoval = true)
	@JsonIgnore
	private List<ProductDetails> productDetails = new ArrayList<>();
	
	public Product(String productName, String author, double price, int in_stock, String description, String imagePath,
			List<User> users, List<Cart> cart, List<Order> order, List<ProductDetails> productDetails) {
		super();
		this.productName = productName;
		this.price = price;
		this.in_stock = in_stock;
		this.description = description;
		this.imagePath = imagePath;
		this.users = users;
		this.cart = cart;
		this.order = order;
		this.productDetails = productDetails;
	}

	public Product() {
		super();
	}

	public String getproductName() {
		return productName;
	}

	public void setproductName(String productName) {
		this.productName = productName;
	}


	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getIn_stock() {
		return in_stock;
	}

	public void setIn_stock(int in_stock) {
		this.in_stock = in_stock;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	public List<Order> getOrder() {
		return order;
	}

	public void setOrder(List<Order> order) {
		this.order = order;
	}

	public List<ProductDetails> getProductDetails() {
		return productDetails;
	}

	public void setCourseDetails(List<ProductDetails> productDetails) {
		this.productDetails = productDetails;
	}

	
	
	
}