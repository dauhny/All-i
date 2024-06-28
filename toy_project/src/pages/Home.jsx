import React from "react";
import * as H from "../styles/styledHome";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const goContentIntro = () => {
    navigate(`/contentintro`);
  };

  return (
    <>
      <H.Container>
        <H.MyPage></H.MyPage>
        <br />
        <br />
        <br />
        <H.InfoTextPurple>New</H.InfoTextPurple>
        <H.ReHercier>
          <img src="/images/ReHersier.svg" />
        </H.ReHercier>
        <br /> <br />
        <br /> <br />
        <H.SearchInput
          type="text"
          placeholder="찾고 있는 전시를 입력해 보세요."
        ></H.SearchInput>
        <H.SerachIcon>
          <img src="/images/SearchIcon.svg" />
        </H.SerachIcon>
        <H.SelectRegion>
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="경기">인천</option>
        </H.SelectRegion>
        <br />
        <br />
        <H.ExhibitPoster>
          <img src="/images/Foreverism.svg" onClick={goContentIntro} />
          <H.ExhibitInfo>
            {" "}
            <p id={"InfoP"}>
              포에버리즘 : 우리를 세상의 끝으로
              <br />
              2024.04.12 ~ 24.06.23
              <br />
              일민미술관
            </p>
          </H.ExhibitInfo>{" "}
        </H.ExhibitPoster>
        <br />
        <br />
        <H.ExhibitPoster>
          <img src="/images/ReHercierPoster.svg" />
          <H.ExhibitInfo>
            {" "}
            <p id={"InfoP"}>
              Re - hercier
              <br />
              2024.05.10 ~ 24.05.23
              <br />
              스페이스 로라
            </p>
          </H.ExhibitInfo>{" "}
        </H.ExhibitPoster>
        <br />
        <br />
        <H.ExhibitPoster>
          <img src="/images/Hipgnosis.svg" alt="Hipgnosis" />
          <H.ExhibitInfo>
            <p id={"InfoP"}>
              힙노시스 : 롤 플레잉 스토리
              <br />
              2024.03.8 ~ 24.08.31
              <br />
              그라운드 시소 서촌
            </p>
          </H.ExhibitInfo>{" "}
        </H.ExhibitPoster>
        <H.PurpleBlur></H.PurpleBlur>{" "}
        <H.InfoText>회원님에게 추천하는 전시입니다!</H.InfoText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <H.RecContainer>
          <H.RecEx1>
            <img src="/images/RecEx1.svg" alt="RecEx1" />
          </H.RecEx1>
          <H.RecEx2>
            <img src="/images/RecEx2.svg" alt="RecEx2" />
          </H.RecEx2>
          <H.RecEx3>
            <img src="/images/RecEx3.svg" alt="RecEx3" />
          </H.RecEx3>
        </H.RecContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <H.InfoText>
          회원님이 좋아하는 작가가
          <br />
          전시를 진행중입니다.
        </H.InfoText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <H.RecContainer>
          <H.RecEx4>
            <img src="/images/RecEx4.svg" alt="RecEx4" />
          </H.RecEx4>
          <H.RecEx5>
            <img src="/images/RecEx5.svg" alt="RecEx5" />
          </H.RecEx5>
          <H.RecEx6>
            <img src="/images/RecEx6.svg" alt="RecEx6" />
          </H.RecEx6>
        </H.RecContainer>
        <H.PinkBlurRight>
          <img src="/images/PinkBlurRight.svg" alt="PinkBlurRight" />
        </H.PinkBlurRight>
      </H.Container>
    </>
  );
}
