import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerPresenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          <div>
            {/* <S.SliderItem src="/images/layout/banner01.png" /> */}123
          </div>
          <div>
            {/* <S.SliderItem src="/images/layout/banner01.png" /> */}456
          </div>
          <div>
            {/* <S.SliderItem src="/images/layout/banner01.png" /> */}789
          </div>
        </Slider>
      </S.Wrapper>
    </>
  );
}
