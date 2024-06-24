import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 1110px;
  margin: 0 auto;
  background: #121212;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  #Writebtn {
    width: 26px;
    margin-top: 32px;
    height: 27px;
    flex-shrink: 0;
  }

  #Ideabtn {
    width: 60px;
    height: 62px;
    margin-top: 14px;
    flex-shrink: 0;
  }
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

export const Box1 = styled.div`
  width: 312px;
  height: 150px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
  margin-top: 15px;
`;

export const SB1 = styled.div`
  width: 284.967px;
  margin-left: 13px;
  margin-top: 11px;
  height: 30px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    margin-top: 6px;
    margin-left: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Box2 = styled.div`
  width: 312px;
  height: 150px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
  margin-top: 15px;
`;

export const SB2 = styled.div`
  width: 284.967px;
  margin-left: 13px;
  margin-top: 11px;
  height: 30px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    margin-top: 6px;
    margin-left: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Box3 = styled.div`
  margin-top: 21px;
  width: 310px;
  height: 341px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const SB3 = styled.div`
  margin-left: 13px;
  margin-top: 11px;
  width: 284.167px;
  height: 30px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;

  #detail {
    margin-top: 6px;
    margin-left: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Help = styled.div`
  width: 190px;
  height: 48px;
  margin-top: 72px;

  #detail {
    color: #d9d9d9;
    text-align: center;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
  }
`;

export const Ideation = styled.div`
  width: 75px;
  height: 24px;
  margin-top: 2px;

  #detail {
    color: #a259ff;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 160% */
  }
`;
