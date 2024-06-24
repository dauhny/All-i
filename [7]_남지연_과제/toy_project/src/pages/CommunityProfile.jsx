import React from "react";
import * as C from "../styles/styledCommunityProfile";
import { useNavigate } from "react-router-dom";

export function CommunityProfile() {
  const navigate = useNavigate();

  const goCommunityProfile = () => {
    navigate(`/communityprofile`);
  };

  return (
    <>
      <C.Container>
        <C.TopBar>
          <C.BackBtn />
          <C.GroupSmall>
            <img src="/images/GroupSmall.svg" alt="GroupSmall" />
          </C.GroupSmall>
          <C.MyPage />
        </C.TopBar>
        <C.ProfileContainer>
          <C.BlackCirclePurple>
            <img id="photo" src="/images/BlackCirclePurple.svg" alt="Circle" />
          </C.BlackCirclePurple>
        </C.ProfileContainer>
        <C.UserInput type="text" placeholder="닉네임"></C.UserInput>
        <C.BigContainer>
          <C.SmallContainer></C.SmallContainer>
          {""}
          <C.SmallContainer></C.SmallContainer>
          {""}
          <C.SmallContainer></C.SmallContainer>
          {""}
        </C.BigContainer>
      </C.Container>
    </>
  );
}
