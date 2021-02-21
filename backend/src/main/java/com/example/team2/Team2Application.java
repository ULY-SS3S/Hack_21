package com.example.team2;


import com.example.team2.entity.User;
import com.example.team2.repository.TestRepository;
import com.example.team2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Team2Application {

    @Autowired
	UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(Team2Application.class, args);
	}
	@Bean
	CommandLineRunner commandlineRunner(UserRepository userRepository){
		return args -> {
			User user = new User("Terry", "Yuanhao", "Lu", "terryl@usc.edu");
			userRepository.save(user);
			System.out.println(userRepository.count());
		};
	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**");
			}
		};
	}
}
