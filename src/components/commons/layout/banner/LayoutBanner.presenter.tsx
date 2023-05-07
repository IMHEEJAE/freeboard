import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerPresenter() {
  const settings = {
    dots: false,
    infinite: true,
    navigation: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <S.SliderItem>
            <S.SliderFilter>
              <S.SliderTitle>타이틀 테스트111</S.SliderTitle>
              <S.SliderDesc>설명 테스트 설명 테스트111</S.SliderDesc>
            </S.SliderFilter>
          </S.SliderItem>

          <S.SliderItem>
            <S.SliderFilter>
              <S.SliderTitle>타이틀 테스트22222</S.SliderTitle>
              <S.SliderDesc>설명 테스트 설명 테스트222222</S.SliderDesc>
            </S.SliderFilter>
          </S.SliderItem>
        </Slider>
      </S.Wrapper>
    </>
  );
}
