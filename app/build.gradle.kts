plugins {
    kotlin("jvm") version "1.8.10"
    id("org.springframework.boot") version "3.1.4"
    id("io.spring.dependency-management") version "1.1.3"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17)) // Java 17 사용
    }
}

repositories {
    mavenCentral()
    google() // Firebase 의존성을 찾기 위해 google() 저장소를 추가
}

dependencies {
    // Spring Boot 라이브러리 명시적으로 추가
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
    
    // Firebase BOM 적용
    implementation(platform("com.google.firebase:firebase-bom:32.0.0"))

    // Firebase Auth에서 androidx.browser 제외
    implementation("com.google.firebase:firebase-auth") {
        exclude(group = "androidx.browser", module = "browser")
    }
    
    implementation("com.google.firebase:firebase-database")
    implementation("com.google.firebase:firebase-admin:9.1.1")

    // 기타 필수 라이브러리
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    // 테스트 라이브러리
    testImplementation("org.junit.jupiter:junit-jupiter")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

kotlin {
    jvmToolchain(17) // JVM 타겟을 17로 설정
}
