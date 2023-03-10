package com.app.dtos;

public class AddProductDto {
	private String productName;
    private double price;
	private int in_stock;
	private String description;
	private String imagePath;
	
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
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
	public AddProductDto(String productName, String author, double price, int in_stock, String description,
			String imagePath) {
		super();
		this.productName = productName;
		 this.price = price;
		this.in_stock = in_stock;
		this.description = description;
		this.imagePath = imagePath;
	}
	public AddProductDto() {
		super();
	}
}
