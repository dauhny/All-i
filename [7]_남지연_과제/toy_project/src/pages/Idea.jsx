import React from "react";
import * as I from "../styles/styledIdea";
import { useNavigate } from "react-router-dom";

const Idea = () => {
  const navigate = useNavigate();

  const goMypage = () => {
    navigate(`/mypage`);
  };

  return (
    <I.Container>
      <I.Bar>
        <I.BackBtn />
        <I.GroupSmall>
          <img src="/images/GroupSmall.svg" alt="GroupSmall" />
        </I.GroupSmall>
        <I.MyPage onClick={goMypage} />
      </I.Bar>
      <I.UserInput
        type="text"
        placeholder="포에버리즘 : 우리의 세상의 끝으로"
      ></I.UserInput>
      <I.Girl>
        <I.Info1>
          <img
            id="blackcircle"
            src="/images/BlackCirclePurple.svg"
            alt="photo"
          />
          <div id="name">문학소녀</div>
          <div id="date">5.12</div>
        </I.Info1>
        <I.Book1>
          <I.Number1>
            <div id="detail">작품 이름 혹은 번호</div>
          </I.Number1>
        </I.Book1>
      </I.Girl>
      <I.Artist>
        <I.Info2>
          <img
            id="blackcircle"
            src="/images/BlackCirclePurple.svg"
            alt="photo"
          />
          <div id="name">고독한 예술가</div>
          <div id="date">1시간 전</div>
        </I.Info2>
        <I.Book2>
          <I.Number2>
            <div id="detail">작품 이름 혹은 번호</div>
          </I.Number2>
        </I.Book2>
      </I.Artist>
    </I.Container>
  );
};

export default Idea;
