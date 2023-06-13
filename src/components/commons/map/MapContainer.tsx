/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.5546788388674, 126.970606917394),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);
    function placesSearchCB(data: any, status: any) {
      const bounds = new kakao.maps.LatLngBounds();
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place: any) {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:10px;height:80px;">' +
            place.place_name +
            "<br />" +
            '<span style="color:red">' +
            "위도:  " +
            place.y +
            "</span>" +
            "<br />" +
            '<span style="color:red">' +
            "경도:  " +
            place.x +
            "</span>" +
            "</div>"
        );

        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9bbd257bacbf7b1e0519291e4f771ef5&libraries=services"
        ></script>
      </Head>
      <>
        <div
          id="myMap"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      </>
    </>
  );
};
export default MapContainer;
