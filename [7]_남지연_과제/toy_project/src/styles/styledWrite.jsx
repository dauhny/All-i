import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1107px;
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
  margin-top: 10px;
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

export const UserInput = styled.input`
  width: 312px;
  height: 40px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-left: 3px;
  margin-top: -25px;
  margin-bottom: 23px;
`;

export const BigContainer = styled.div`
  width: 312px;
  height: 339.355px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InformationInput = styled.input`
  width: 235px;
  height: 30px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 19px;
  margin-top: 15px;
  margin-bottom: 23px;
`;

export const ButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 15px;
  #detail {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    fill: #a259ff;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-top: 9px;
  }
`;

export const CommentContainer = styled.div`
  width: 220px;
  height: 52px;
  flex-shrink: 0;
  margin-left: 44px;
  margin-top: 80px;
  #detail {
    color: rgba(255, 255, 255, 0.38);
    text-align: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InsertInput = styled.input`
  width: 113px;
  height: 30px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 33px;
  margin-top: 84px;
  margin-bottom: 23px;
`;

export const ShareInput = styled.input`
  width: 113px;
  height: 30px;
  border: 1px solid #a259ff;
  background: #121212;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 12px;
  margin-top: 84px;
  margin-bottom: 10px;
`;

export const img = styled.div`
  margin-top: 330px;
`;

export const Help = styled.div`
  width: 190px;
  height: 48px;
  margin-top: 10px;

  #detail {
    color: #d9d9d9;
    text-align: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-top: 80px;
  }
`;

export const Idea = styled.div`
  margin-top: 80px;
`;

export const Ideation = styled.div`
  width: 75px;
  height: 24px;

  #detail {
    color: #a259ff;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 160% */
  }
`;
