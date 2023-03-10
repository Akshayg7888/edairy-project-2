package com.app.dtos;

import com.app.pojos.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class AuthResp {
	private String message;
	private String jwt;
	private LoggedInUserDto user;

	public AuthResp(String message, String jwt, LoggedInUserDto user2) {
		super();
		System.out.println("in authresp construstor "+user2);
		
		
		this.message = message;
		this.jwt = jwt;
		this.user = user2;
	}
}