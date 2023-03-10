package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Login;
import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByLogin(Login login);

	
}
