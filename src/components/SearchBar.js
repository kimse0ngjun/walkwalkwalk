import * as React from "react";
import { SearchBarContainer, SearchForm, SearchInputImage, SearchButton } from '../styles/SearchBarStyles';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchForm noValidate autoComplete="off">
        <div style={{ position: 'relative' }}>
          <SearchInputImage 
            src="/search-input.png" 
            alt="Search Input" 
            style={{ position: 'absolute', top: '0', left: '0' }} // 이미지 위치 조정
          />
          <input 
            type="text" 
            placeholder=" " // 플레이스홀더를 공백으로 설정
            style={{ 
              height: '40px', 
              padding: '5px', 
              paddingLeft: '40px', // 이미지와 겹치지 않도록 패딩 추가
              backgroundColor: 'transparent', // 배경을 투명하게 설정
              border: 'none', // 테두리 제거
              outline: 'none', // 포커스 아웃라인 제거
              position: 'relative', // 포지션 설정
              zIndex: 1 // 이미지 위에 위치하도록 설정
            }} 
          />
        </div>
        <SearchButton type="submit" aria-label="search">
          <img src="/search.png" alt="Search" style={{ width: '20px', height: '20px' }} />
        </SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
}

export default SearchBar;