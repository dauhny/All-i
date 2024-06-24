import React from "react";
import * as S from "../styles/styledSee";
import { useNavigate } from "react-router-dom";

const See = () => {
  const navigate = useNavigate();

  const goMypage = () => {
    navigate(`/mypage`);
  };

  return (
    <S.Container>
      <S.TopBar>
        <S.BackBtn />
        <S.GroupSmall>
          <img src="/images/GroupSmall.svg" alt="GroupSmall" />
        </S.GroupSmall>
        <S.MyPage onClick={goMypage} />
      </S.TopBar>
      <S.UserInput
        type="text"
        placeholder="포에버리즘 : 우리의 세상의 끝으로"
      ></S.UserInput>
      <S.Box1>
        <S.SB1>
          <div id="detail">작품 이름 혹은 번호(필수아님)</div>
        </S.SB1>
      </S.Box1>
      <S.Box2>
        <S.SB2>
          <div id="detail">작품 이름 혹은 번호(필수아님)</div>
        </S.SB2>
      </S.Box2>
      <S.Box3>
        <S.SB3>
          <div id="detail">작품 이름 혹은 번호(필수아님)</div>
        </S.SB3>
      </S.Box3>
      <img id="Writebtn" src="/images/WriteBtn.svg" alt="write" />
      <S.Help>
        <div id="detail">
          어려우신가요?
          <br /> 타인의 해석도 궁금하다면 참고해보세요!!
        </div>
      </S.Help>
      <img id="Ideabtn" src="/images/Idea.svg" alt="Idea" />
      <S.Ideation>
        <div id="detail">아이데이션</div>
      </S.Ideation>
    </S.Container>
  );
};

export default See;
