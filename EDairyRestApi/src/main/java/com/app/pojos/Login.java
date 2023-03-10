package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "logins")
public class Login {
	@Id @Column(length = 20, unique = true, updatable = false, nullable = false)
	private String username;

	@Column(nullable = false)
	private String password;

	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonIgnore
	private Admin admin;

	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonIgnore
	private User user;

	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public Login() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Login [username=" + username + "]";
	}	
}