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
        <Slider {...settings}>
          <div>
            <S.SliderItem src="/images/layout/banner01.png" />
          </div>
          <div> 
            <S.SliderItem src="/images/layout/banner01.png" />
          </div>
          <div>
            <S.SliderItem src="/images/layout/banner01.png" />
          </div>
        </Slider>
      </S.Wrapper>
    </>
  );
}
