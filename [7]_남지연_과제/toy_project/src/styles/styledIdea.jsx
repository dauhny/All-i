import { styled } from "styled-components";

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

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 135px;
  margin-top: -180px;
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
  margin-top: 25px;
  margin-bottom: 23px;
`;

export const Girl = styled.div`
  width: 392px;
  height: 195px;
  display: flex;
  flex-direction: row;
`;

export const Info1 = styled.div`
  width: 90px;

  #blackcircle {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #a259ff;
    margin-left: 15px;
  }

  #name {
    color: #fff;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 23px;
  }

  #date {
    color: #d9d9d9;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: 40px;
  }
`;

export const Book1 = styled.div`
  margin-left: 15px;
  width: 249px;
  height: 192px;
  flex-shrink: 0;
  fill: #121212;
  stroke-width: 1px;
  border: 1px solid #a259ff;
  background: #121212;
  stroke: #a259ff;
`;

export const Number1 = styled.div`
  margin-top: 15px;
  margin-left: 13px;
  width: 218px;
  height: 32px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    margin-top: 4px;
    margin-left: 17px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
  }
`;

export const Artist = styled.div`
  width: 392px;
  height: 312px;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

export const Info2 = styled.div`
  width: 90px;

  #blackcircle {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #a259ff;
    margin-left: 15px;
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

  #date {
    color: #d9d9d9;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
    margin-left: 32px;
  }
`;

export const Book2 = styled.div`
  margin-left: 15px;
  width: 249px;
  height: 311px;
  flex-shrink: 0;
  fill: #121212;
  stroke-width: 1px;
  stroke: #a259ff;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const Number2 = styled.div`
  margin-top: 15px;
  margin-left: 13px;
  width: 218px;
  height: 32px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    margin-top: 4px;
    margin-left: 17px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 200% */
  }
`;
