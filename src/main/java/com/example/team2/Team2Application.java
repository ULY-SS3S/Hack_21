package com.example.team2;


import com.example.repository.TestRepository;
import com.example.team2.entity.Test;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Team2Application {

	public static void main(String[] args) {
		SpringApplication.run(Team2Application.class, args);
	}
	@Bean
	CommandLineRunner commandlineRunner(TestRepository testRepository){
		return args -> {
			Test test = new Test("Hi");
			testRepository.save(test);
		};
	}
}
