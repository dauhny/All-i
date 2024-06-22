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
  margin-top: -45px;
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
  margin-top: 20%;
`;

export const BlackCirclePurple = styled.div`
  width: 70px;
  height: 70px;
  fill: #121212;
  stroke: #a259ff;
  background-image: url("/images/BlackCirclePurple.svg");
  background-color: transparent;
  border: none;
  outline: none;
`;

export const InfoText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const RecBookContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10%;
`;

export const RecBook1 = styled.div`
  width: 111px;
  height: 161px;
  flex-shrink: 0;
  background-image: url("/images/RecBook1.svg");
`;

export const BookInfo = styled.div`
  width: 160px;
  height: 161px;
  flex-shrink: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid #a259ff;
  background: #121212;
  text-align: left;
  padding-left: 10px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10%;
  width: 312px;
  height: 350px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const BulbIcon = styled.div`
  width: 46px;
  height: 46px;
  background-image: url("/images/BulbIcon.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  margin: 10px;
`;
