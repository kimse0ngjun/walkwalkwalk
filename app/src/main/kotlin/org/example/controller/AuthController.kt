// package com.example.controller

// import com.example.security.GoogleLoginService
// import org.springframework.beans.factory.annotation.Autowired
// import org.springframework.web.bind.annotation.PostMapping
// import org.springframework.web.bind.annotation.RequestBody
// import org.springframework.web.bind.annotation.RestController

// data class GoogleLoginRequest(val idToken: String)

// @RestController
// class AuthController {

//     @Autowired
//     lateinit var googleLoginService: GoogleLoginService

//     @PostMapping("/auth/google")
//     fun googleLogin(@RequestBody request: GoogleLoginRequest): String {
//         val decodedToken = googleLoginService.loginWithGoogle(request.idToken)
//         return if (decodedToken != null) {
//             // 로그인 성공, Firebase에서 사용자 정보 추출 후 JWT 생성
//             "로그인 성공, user ID: ${decodedToken.uid}"
//         } else {
//             // 로그인 실패
//             "Invalid Google ID Token"
//         }
//     }
// }
