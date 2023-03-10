package com.app.services;



import java.util.List;

import com.app.dtos.LoggedInUserDto;
import com.app.dtos.SigninDto;
import com.app.dtos.UserRegisterDto;
import com.app.dtos.UserRegisterSuccessDto;
import com.app.pojos.Product;
import com.app.pojos.User;

public interface UserService {
	List<User> getAllUsers();
	
	UserRegisterSuccessDto registerUser(UserRegisterDto user);
	
	LoggedInUserDto getUserByUsername(String username);
	
	//User updateUserPassword(User updateUserPassword);
	
	User updateUserProfile(User updateUserProfile);

	LoggedInUserDto getuser(SigninDto dto);
	
	List<Product> getUsersCourses(Long userId);
	
}
