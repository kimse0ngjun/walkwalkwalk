package com.example.config

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthException
import com.google.firebase.auth.FirebaseToken
import com.google.firebase.database.FirebaseDatabase

object FirebaseConfig {
    val auth: FirebaseAuth = FirebaseAuth.getInstance()
    val database: FirebaseDatabase = FirebaseDatabase.getInstance()

    // Firebase ID 토큰 검증
    fun verifyIdToken(idToken: String): FirebaseToken? {
        return try {
            val decodedToken = auth.verifyIdToken(idToken)
            decodedToken
        } catch (e: FirebaseAuthException) {
            null
        }
    }
}
