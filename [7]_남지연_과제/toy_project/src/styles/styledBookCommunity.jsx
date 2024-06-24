import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1042px;
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

export const InfoText1 = styled.div`
  width: 70px;

  #blackcircle {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #a259ff;
    margin-left: 4px;
  }

  #name {
    color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 9px;
  }
`;

export const TextContainer = styled.div`
  width: 312px;
  height: 238px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const UserText = styled.div`
  #detail1 {
    width: 300px;
    height: 192px;
    color: #fff;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-top: 15px;
    margin-left: 5px;
  }

  #img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-left: 8px;
  }
`;

export const CommentContainer = styled.div`
  width: 312px;
  height: 90px;
  display: flex;
  flex-direction: row;
  #detail {
    width: 25px;
    height: 33.334px;
    flex-shrink: 0;
    margin-left: 15px;
    margin-top: 9px;
  }
`;

export const SmallContainer = styled.div`
  #detail2 {
    width: 51px;
    height: 50px;
    flex-shrink: 0;
    margin-left: 8px;
    margin-top: 9px;
  }

  #name {
    width: 40px;
    height: 24px;
    color: #fff;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: 13px;
  }
`;

export const CommentText = styled.div`
  width: 200px;
  height: 74px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
  margin-top: 9px;
  margin-left: 12px;
  #detail3 {
    width: 187px;
    height: 72px;
    color: #fff;
    font-family: Roboto;
    font-size: 9.8px;
    font-style: normal;
    font-weight: 480;
    line-height: 24px;
    margin-left: 10px;
  }
`;

export const Info = styled.div`
  width: 90px;

  #blackcircle {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #a259ff;
    margin-left: 15px;
    margin-top: 70px;
  }

  #name {
    color: #fff;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    margin-left: 8px;
  }
`;

export const EmptyContainer = styled.div`
  width: 312px;
  height: 92px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const ExpandBtn = styled.button`
  width: 30px;
  position: relative;
  border: 1px solid #121212;
  background: #121212;
  margin-top: 80px;
`;

export const Help = styled.div`
  width: 110px;
  height: 50px;

  #ment {
    width: 110px;
    height: 48px;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
  }
`;

export const ShareContainer = styled.div`
  width: 350px;
  height: 41px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    width: 348px;
    height: 24px;
    color: #d9d9d9;
    font-family: Roboto;
    font-size: 9.8px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: 4px;
    margin-top: 8px;
  }
`;
