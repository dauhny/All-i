import { styled, css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 969px;
  background: linear-gradient(180deg, #3b3e40 0%, #101212 100%);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const BlackCircleWhite = styled.div`
  width: 70px;
  height: 70px;
  fill: #121212;
  stroke-width: 1px;
  stroke: #fff;
  margin-left: 7%;
  margin-top: 10%;
`;

export const InfoText = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -15%;
  text-align: left;
  padding-left: 110px;
`;

export const AlbumCover = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 26%;
  margin-top: 15%;
  background-image: url("/images/AlbumCover.svg");
`;

export const MusicInfo = styled.div`
  #songTitle {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 50%;
  }

  #artist {
    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 45.5%;
    margin-top: -10.5%;
  }
`;

export const UserText = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
`;
