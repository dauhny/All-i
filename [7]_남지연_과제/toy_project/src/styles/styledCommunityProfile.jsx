import { styled, css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 135px;
  margin-top: -520px;
`;

export const BackBtn = styled.button`
  width: 29px;
  height: 30px;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const GroupSmall = styled.div`
  width: 45px;
  height: 27px;
`;

export const MyPage = styled.button`
  width: 25px;
  height: 27px;
  cursor: pointer;
  background-image: url("/images/MyPage.svg");
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 5%;
`;

export const BlackCirclePurple = styled.div`
  #photo {
    width: 137px;
    height: 138px;
    margin-left: 10px;
    margin-top: 60px;
    fill: #121212;
    stroke: #a259ff;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const UserInput = styled.input`
  width: 142.558px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160.5%;
  padding-left: 3px;
  margin-top: 15px;
  margin-bottom: 23px;
`;

export const BigContainer = styled.div`
  width: 326px;
  height: 373px;
  flex-shrink: 0px;
  border: 1px solid #a259ff;
  background: #121212;
  margin-bottom: -405px;
  display: flex;
  flex-direction: row;
`;

export const SmallContainer = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 10px;
  gap: 10px;
  border: 1px solid #a259ff;
  background: #121212;
  stroke-width: 1px;
  stroke: #a259ff;
  background-color: transparent;
`;
