import React from "react";
import * as B from "../styles/styledBookCommunity";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../styles/styledWrite";

export function BookCommunity() {
  const navigate = useNavigate();

  const goMyPage = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      <B.Container>
        <B.TopBar>
          <B.BackBtn />
          <B.GroupSmall>
            <img src="/images/GroupSmall.svg" alt="GroupSmall" />
          </B.GroupSmall>
          <B.MyPage onClick={goMyPage} />
        </B.TopBar>
        <B.ProfileContainer>
          <B.InfoText1>
            <img
              id="blackcircle"
              src="/images/BlackCirclePurple.svg"
              alt="photo"
            />
            <div id="name">문학소녀</div>
          </B.InfoText1>
        </B.ProfileContainer>
        <B.TextContainer>
          <B.UserText>
            <div id="detail1">
              저는 전시의 부제가 “우리를 세상의 끝으로” 인만큼 문학동네 시인선
              200 기념 티저 시집 “우리를 세상의 끝으로” 라는 책을 다시 꺼내보게
              되었어 요!! 혹시 김이듬 시인의 “후배에게”라는 시를 아시나요?
              미래의 나’에게 이미 삶을 살아 본 ‘현재의 나’가 보내는 다정하고
              애틋한 시라 포에버리즘 전시와 너무 잘어울린다고 생각했어요 ~~
              <br />
              <br />
              전시회 근처에 서점 이 있으니 전시가 인상깊으셨다면 하나 구매해서
              소장해도 좋을 것 같아요!! :) <br />
              <img id="img" src="/images/TalkBallon.svg" alt="TalkBallon" />
            </div>
          </B.UserText>
        </B.TextContainer>
        <B.CommentContainer>
          <img id="detail" src="/images/Arrow.svg" alt="point" />
          <B.SmallContainer>
            <img
              id="detail2"
              src="/images/BlackCirclePurple.svg"
              alt="Circle"
            />
            <div id="name">문학소녀</div>
          </B.SmallContainer>
          <B.CommentText>
            <div id="detail3">
              음악을 좋아해? 걷는 걸 좋아해? 맛있는 걸 좋아해? 네가 사는 것도
              좋아하면 좋겠다 이 시 맞나요..? 제가 좋아하는 구절이에요..!
            </div>
          </B.CommentText>
        </B.CommentContainer>
        <B.Info>
          <img
            id="blackcircle"
            src="/images/BlackCirclePurple.svg"
            alt="photo"
          />
          <div id="name">고독한 예술가</div>
        </B.Info>
        <B.EmptyContainer></B.EmptyContainer>
        <B.ExpandBtn>
          <img id="Btn" src="/images/ExpandBtn.svg" alt="photo"></img>
        </B.ExpandBtn>
        <B.Help>
          <div id="ment">
            전시 경험이 있나요?
            <br />
            나도 할 수 있다 예술가!
          </div>
        </B.Help>
        <B.ShareContainer>
          <div id="detail">
            이 전시를 관람할 예정자를 위해 참고하면 좋을 것들을 자유롭게
            공유해보세요!
          </div>
        </B.ShareContainer>
      </B.Container>
    </>
  );
}
