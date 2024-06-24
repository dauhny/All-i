import React from "react";
import * as B from "../styles/styledBookInfo";
import { useNavigate } from "react-router-dom";
import { InfoText } from "../styles/styledBookInfo";

export function BookInfo() {
  const navigate = useNavigate();

  const goBookInfo = () => {
    navigate(`/bookinfo`);
  };

  const goCommunityProfile = () => {
    navigate(`/communityprofile`);
  };

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
          <B.BlackCirclePurple onClick={goCommunityProfile} />
          <B.InfoText>
            안녕하세요!!
            <br />
            저는 이지원님의 로스텔지어라는 책을 <br />
            추천드리고 싶어요!!
          </B.InfoText>
        </B.ProfileContainer>
        <B.RecBookContainer>
          <B.RecBook1 />
          <B.BookInfo>
            책정보가 들어갑니다.
            <br />
            <br />
            책제목
            <br />
            저자
            <br />
            출판사
            <br />
            구매링크
          </B.BookInfo>
        </B.RecBookContainer>
        <B.ReviewContainer>
          <B.BulbIcon />
          <B.InfoText style={{ margin: "23px 1px 1px -25px" }}>
            간단한 전시 관람팁을 소개해 주세요!
          </B.InfoText>
        </B.ReviewContainer>
      </B.Container>
    </>
  );
}
