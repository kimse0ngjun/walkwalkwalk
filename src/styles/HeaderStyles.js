import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  height:50px;
`;

export const Logo = styled.div`
  width: 120px;  // 로고 크기 설정
  height: 40px;
  background-image: url('/walklogo.png');  // public 폴더의 로고 이미지 경로
  background-size: contain;  // 이미지 크기를 컨테이너에 맞게 조정
  background-repeat: no-repeat;  // 이미지 반복 안 함
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  width: 200px;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;
