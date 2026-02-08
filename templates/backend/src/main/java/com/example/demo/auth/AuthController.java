package com.example.demo.auth;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.security.JwtService;
import com.example.demo.user.User;
import com.example.demo.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        userRepository.save(user);
        return "User registered";
    }

    @PostMapping("/login")
public String login(@RequestBody LoginRequest request) {

    User dbUser = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

    if (!passwordEncoder.matches(request.getPassword(), dbUser.getPassword())) {
        throw new RuntimeException("Invalid credentials");
    }

    return jwtService.generateToken(dbUser.getEmail());
}

}
