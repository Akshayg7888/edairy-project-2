package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ProductDetails extends BaseEntity {
	@ManyToOne
	@JoinColumn(name = "productId")
	@JsonIgnore
	private Product product;
	
	@Column(nullable = false, unique = true)
	private String categoryName;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product= product;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public ProductDetails(Product product, String categoryName) {
		super();
		this.product = product;
		this.categoryName = categoryName;
	}

	public ProductDetails() {
		super();
	}

	
}
