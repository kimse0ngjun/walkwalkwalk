import React, { useEffect } from 'react';
import { containerStyle, mapContainerStyle } from '../styles/MapStyles';

function Map() {
  useEffect(() => {
    // 네이버 지도 API 로드 상태 확인을 위한 로그
    console.log('window.naver:', window.naver);
    
    if (window.naver) {
      const mapContainer = document.getElementById('map');
      // mapContainer가 존재하는지 확인
      console.log('mapContainer:', mapContainer);
      
      const mapOption = {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 10,
      };

      try {
        const map = new window.naver.maps.Map(mapContainer, mapOption);
        console.log('map created:', map);
      } catch (error) {
        console.error('지도 생성 중 오류:', error);
      }
    } else {
      console.error("네이버 지도 API 로드 실패!");
    }
  }, []);

  return (
    <div style={containerStyle}>
      
      <div
        id="map"
        style={mapContainerStyle}
      ></div>
    </div>
  );
}

export default Map;
