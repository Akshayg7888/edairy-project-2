package com.app.dtos;

public class AddProductToCartDto {
	private Long productId;
	private Long cartId;
	
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public Long getCartId() {
		return cartId;
	}
	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}
	public AddProductToCartDto(Long productId, Long cartId) {
		super();
		this.productId = productId;
		this.cartId = cartId;
	}
	public AddProductToCartDto() {
		super();
	}
}
