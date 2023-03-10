package com.app.dtos;

import com.app.pojos.Product;

public class AddProductDetailsDto {
	private Long productId;
	private String categoryName;
	
	public AddProductDetailsDto() {
		super();
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public AddProductDetailsDto(Long productId, String categoryName) {
		super();
		this.productId = productId;
		this.categoryName = categoryName;
	}
	
}
