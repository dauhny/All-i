import { styled, css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1523px;
  margin: 0 auto;
  background: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
//dsdsds
export const ForeverismIntro = styled.div`
  width: 390px;
  height: 408px;
  flex-shrink: 0;
`;

//commit2
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

//go home
export const PurpleBlurCenter = styled.div`
  width: 185px;
  height: 184px;
  flex-shrink: 0;
  background-color: #a259ff;
  filter: blur(159px);
  margin-left: 27%;
  margin-top: -20%;
`;

//commit3
export const ExhibitTitle = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

export const ExhibitDetail = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 5%;
`;

export const Rectangle = styled.div`
  width: 390px;
  height: 1292px;
  flex-shrink: 0;
  border-radius: 50px 50px 0px 0px;
  border-top: 1px solid #a259ff;
  background: #121212;
  position: relative;
  top: -5.5%;
`;

export const WriteBtn = styled.button`
  width: 26px;
  height: 27px;
  flex-shrink: 0;
  background-image: url("/images/WriteBtn.svg");
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 45%;
`;

export const ExpandBtn = styled(WriteBtn)`
  width: 26.8px;
  background-image: url("/images/ExpandBtn.svg");
  margin-left: 68%;
  position: relative;
  top: -25px;
`;

export const RecContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
`;

export const RecBook1 = styled.div`
  width: 111px;
  height: 161px;
  flex-shrink: 0;
  background-image: url("/images/RecBook1.svg");
  margin-left: 15%;
`;

export const RecBook2 = styled(RecBook1)`
  background-image: url("/images/RecBook2.svg");
  margin-left: 3.5%;
`;

export const RecBook3 = styled(RecBook2)`
  background-image: url("/images/RecBook3.svg");
`;

export const BookMarkBtn = styled(WriteBtn)`
  background-image: url("/images/BookMarkBtn.svg");
  margin-left: 88%;
  position: relative;
  top: -95px;
`;

export const RecMusic1 = styled.div`
  width: 149.85px;
  height: 182.215px;
  flex-shrink: 0;
  background-image: url("/images/RecMusic1.svg");
  filter: drop-shadow(0px 10.705px 26.763px rgba(0, 0, 0, 0.25));
`;

export const MusicInfo = styled.div`
  width: 142.83px;
  height: 55.7px;
  flex-shrink: 0;
  padding-left: 10px;
  margin-top: 90%;
  background: linear-gradient(180deg, #3b3e40 0%, #101212 100%);
  backdrop-filter: blur(71.72543334960938px);

  #songTitle {
    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding-top: 5px;
  }

  #artist {
    color: #fff;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-top: -25%;
  }
`;

export const RecMusic2 = styled(RecMusic1)`
  background-image: url("/images/RecMusic2.svg");
  margin-left: 4%;
`;

export const RecMusic3 = styled(RecMusic2)`
  background-image: url("/images/RecMusic3.svg");
`;

export const DeepPurpleBlur = styled.div`
  width: 223px;
  height: 208.099px;
  flex-shrink: 0;
  background-image: linear-gradient(#fe3796, #a259ff);
  filter: blur(150px);
`;
