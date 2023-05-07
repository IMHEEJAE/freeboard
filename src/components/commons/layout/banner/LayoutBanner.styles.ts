import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 400px;
  overflow: hidden;
  .slick-slider {
    .slick-prev {
      left: 150px;
    }
    .slick-next {
      right: 150px;
    }
    .slick-prev,
    .slick-next {
      z-index: 999;
      :before {
        font-size: 30px;
        color: #eee;
      }
    }
  }
`;
export const SlickSlider = styled.div``;
export const SliderItem = styled.div`
  height: 400px;
  margin: auto;
  background: url(../../../../images/layout/main_banner01.png) no-repeat 50%
    100%;
  background-size: cover;
`;
export const SliderFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.8;
`;
export const SliderTitle = styled.h5`
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
`;
export const SliderDesc = styled.span`
  color: #fff;
`;
