import React from "react";
import * as W from "../styles/styledWrite";
import { useNavigate } from "react-router-dom";

export function Write() {
  const navigate = useNavigate();

  const goWrite = () => {
    navigate(`/write`);
  };

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      <W.Container>
        <W.TopBar>
          <W.BackBtn />
          <W.GroupSmall>
            <img src="/images/GroupSmall.svg" alt="GroupSmall" />
          </W.GroupSmall>
          <W.MyPage onClick={goMyPage} />
        </W.TopBar>
        <W.ProfileContainer>
          <W.UserInput
            type="text"
            placeholder="포에버리즘 : 우리의 세상의 끝으로"
          ></W.UserInput>
        </W.ProfileContainer>
        <W.BigContainer>
          <W.Container1>
            <W.InformationInput
              type="text"
              placeholder="작품 이름 혹은 번호(필수아님)"
            ></W.InformationInput>
            <W.ButtonContainer>
              <img id="detail" src="/images/Plus.svg" alt="Plus" />
            </W.ButtonContainer>
          </W.Container1>
          <W.CommentContainer>
            <div id="detail">
              나의 감상을 기록하고 정리한 것을 타인과 공유하면서 새로운 시각을
              발견하고 영감을 얻어보아요!!
            </div>
          </W.CommentContainer>
          <W.Container2>
            <W.InsertInput type="text" placeholder="삽입"></W.InsertInput>
            <W.ShareInput type="text" placeholder="공유"></W.ShareInput>
          </W.Container2>
        </W.BigContainer>
        <W.img>
          <img id="detail" src="/images/Edit.svg" alt="Edit" />
        </W.img>
        <W.Help>
          <div id="detail">
            어려우신가요?
            <br /> 타인의 해석도 궁금하다면 참고해보세요!!
          </div>
        </W.Help>
        <W.Idea>
          <img id="Ideabtn" src="/images/Idea.svg" alt="Idea" />
        </W.Idea>

        <W.Ideation>
          <div id="detail">아이데이션</div>
        </W.Ideation>
      </W.Container>
    </>
  );
}
