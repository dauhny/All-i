import { styled } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: 844px;
  background: #121212;
  position: relative;
  align-items: center;
  margin: 0 auto;
`;

export const Bar = styled.div`
  width: 390px;
  height: 52px;
  flex-shrink: 0;
  background: #121212;
  margin-top: 3px;

  #backbtn {
    width: 29px;
    height: 30px;
    flex-shrink: 0;
    margin-left: 10px;
    margin-top: 11px;
  }

  #museum {
    width: 50px;
    height: 34px;
    flex-shrink: 0;
    margin-top: 8px;
    margin-left: 130px;
  }
`;

export const Image = styled.div`
  margin-left: 124px;
  margin-top: 20px;

  #bigcircle {
    width: 137px;
    height: 138px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #a259ff;
  }
`;

export const Name = styled.div`
  width: 142.558px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #a259ff;
  background: #121212;
  margin-left: 120px;
  margin-top: 8px;

  #detail {
    margin-left: 32px;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.5);
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%; /* 19.26px */
    flex-shrink: 0;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  width: 143px;
  margin-left: 127px;
  margin-top: 14px;
`;

export const Record = styled.div`
  #photo {
    width: 26px;
    height: 27px;
    flex-shrink: 0;
  }

  #detail {
    color: #a259ff;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
  }
`;

export const Scrap = styled.div`
  margin-left: 70px;
  #photo {
    display: flex;
    width: 28px;
    height: 29px;
    padding: 2.417px 4.667px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  #detail {
    color: #a259ff;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 240% */
  }
`;

export const BigBox = styled.div`
  margin-top: 35px;
  margin-left: 22px;
  width: 346px;
  height: 350px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
  display: flex;
  flex-direction: row;
`;

export const S1 = styled.div`
  margin-left: 6px;
  margin-top: 11px;
  width: 107px;
  height: 106px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const S2 = styled.div`
  margin-left: 5px;
  margin-top: 11px;
  width: 107px;
  height: 106px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;

export const S3 = styled.div`
  margin-left: 5px;
  margin-top: 11px;
  width: 107px;
  height: 106px;
  flex-shrink: 0;
  border: 1px solid #a259ff;
  background: #121212;
`;
