import React from 'react';
import { HeaderContainer, Logo,AuthButtons, AuthButton } from '../styles/HeaderStyles';
import SearchBar from './SearchBar';

function Header() {
  return (
    <HeaderContainer>
      {/* 로고 */}
      <Logo>
        <img src="/walklogo.png" alt="Walk Logo" style={{ width: '120px', height: 'auto' }} />
      </Logo>
    
      {/* 기존 SearchBar 컴포넌트 사용 */}
      <SearchBar />

      {/* 로그인 및 회원가입 버튼 */}
      <AuthButtons>
        <AuthButton>로그인</AuthButton>
        <AuthButton>회원가입</AuthButton>
      </AuthButtons>
    </HeaderContainer>
  );
}

export default Header;
