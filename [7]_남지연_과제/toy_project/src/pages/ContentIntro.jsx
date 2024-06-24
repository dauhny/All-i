import React from "react";
import * as C from "../styles/styledContentIntro";
import { useNavigate } from "react-router-dom";

export function ContentIntro() {
  const navigate = useNavigate();

  const goMusicCommunity = () => {
    navigate(`/musiccommunity`);
  };

  const goBookInfo = () => {
    navigate(`/bookinfo`);
  };

  const goBookCommunity = () => {
    navigate(`/bookcommunity`);
  };

  const goCommunityProfile = () => {
    navigate(`/communityprofile`);
  };

  const goWrite = () => {
    navigate(`/write`);
  };

  return (
    <>
      <C.Container>
        <C.ForeverismIntro>
          <img src="/images/ForeverismIntro.svg" alt="Foreverism" />
        </C.ForeverismIntro>
        <C.Rectangle>
          <br></br>
          <C.ExhibitTitle>포에버리즘 : 우리를 세상의 끝으로</C.ExhibitTitle>
          <br></br> <br></br>
          <C.ExhibitDetail>
            전시기간 : 24.04.12 ~ 24.0623<br></br>
            주소 : 서울 종로구 세종대로 152 일민 미술관 <br></br>
            운영시간 : 11:00~19:00<br></br>
            휴무일: 매주 월요일
          </C.ExhibitDetail>
          <C.BookMarkBtn onClick={goWrite}></C.BookMarkBtn>
          <br></br> <br></br>
          <C.WriteBtn></C.WriteBtn>
          <C.PurpleBlurCenter></C.PurpleBlurCenter> <br></br>
          <C.InfoText>사전에 알고 가면 좋아요!</C.InfoText>
          <C.ExpandBtn onClick={goBookCommunity}></C.ExpandBtn>
          <br></br> <br></br>
          <C.RecContainer>
            <C.RecBook1 onClick={goBookInfo}></C.RecBook1>
            <C.RecBook2></C.RecBook2>
            <C.RecBook3></C.RecBook3>
          </C.RecContainer>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <C.InfoText>이 음악과 함께하면 좋아요!</C.InfoText>
          <C.ExpandBtn
            onClick={goMusicCommunity}
            style={{ marginLeft: "73%" }}
          ></C.ExpandBtn>
          <br></br> <br></br>
          <C.RecContainer>
            <C.RecMusic1>
              <C.MusicInfo>
                <p id={"songTitle"}>T</p>
                <br></br>
                <p id={"artist"}>실리카겔</p>
              </C.MusicInfo>
            </C.RecMusic1>
            <C.RecMusic2>
              <C.MusicInfo>
                <p id={"songTitle"}>Bring It On Home to me</p>
                <br></br>
                <p id={"artist"}>Sam Cooke</p>
              </C.MusicInfo>
            </C.RecMusic2>{" "}
            <C.RecMusic3>
              <C.MusicInfo>
                <p id={"songTitle"}>Like Someone</p>
                <br></br>
                <p id={"artist"}>Bill Evans</p>
              </C.MusicInfo>
            </C.RecMusic3>
          </C.RecContainer>
          <C.DeepPurpleBlur></C.DeepPurpleBlur>
        </C.Rectangle>
      </C.Container>
    </>
  );
}
