import { styled, css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 2369px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const PurpleBlur = styled.div`
  width: 223px;
  height: 208.099px;
  margin: -30px;
  background-color: #a259ff;
  filter: blur(159.68670654296875px);
`;

export const MyPage = styled.button`
  width: 25px;
  height: 27px;
  margin-left: 89%;
  position: relative;
  top: 15px;
  cursor: pointer;
  background-image: url("/images/MyPage.svg");
  background-color: transparent;
  border: none;
  outline: none;
`;

export const InfoTextPurple = styled.div`
  color: #a259ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 5%;
`;

export const ReHercier = styled.div`
  width: 256px;
  height: 321px;
  margin: -20px 0px 0px 70px;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 232px;
  padding: 7px 10px 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #a259ff;
  background-color: rgba(255, 255, 255, 0);
  margin-left: 10%;
  color: rgba(255, 255, 255, 0.5);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%;
    text-align: center;
  }
`;

export const SerachIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 11%;
  margin-top: -7%;
`;

export const SelectRegion = styled.select`
  width: 58px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #a259ff;
  margin-left: 77%;
  position: relative;
  top: -1.05%;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.5);
`;

export const ExhibitPoster = styled.div`
  width: 300px;
  height: 176px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-left: 11.5%;
  overflow: hidden;
  position: relative;
  position: relative;
  z-index: 999;
  cursor: pointer;
`;

export const ExhibitInfo = styled.div`
  width: 300px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 0px 0px 10px 10px;
  background: rgba(245, 247, 250, 0.37);
  margin-top: -28%;
  position: absolute;

  #InfoP {
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    text-align: right;
    padding-right: 10px;
    margin-top: 2%;
  }
`;

export const InfoText = styled.div`
  color: #fff;
  text-align: left;
  font-family: Barlow;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 8%;
`;

export const RecContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
`;

export const RecEx1 = styled.div`
  width: 140px;
  height: 150px;
  flex-shrink: 0;
`;

export const RecEx2 = styled(RecEx1)``;

export const RecEx3 = styled(RecEx1)`
  margin-left: 4.6%;
`;

export const RecEx4 = styled(RecEx1)``;

export const RecEx5 = styled(RecEx1)``;

export const RecEx6 = styled(RecEx3)``;

export const PinkBlurRight = styled.div`
  width: 223px;
  height: 234px;
  margin-top: -300px;
`;
