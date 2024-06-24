import React from "react";
import * as L from "../styles/styledLogin";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <>
      <L.Container>
        <L.Group>
          <img src="/images/Group.svg" alt="Group" />
        </L.Group>
        <L.Ellipse549></L.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <L.InputContainer>
          <L.InputLabel>아이디</L.InputLabel>
          <L.UserInput
            type="text"
            placeholder="아이디를 입력하세요."
          ></L.UserInput>
          <br></br>
          <L.InputLabel>비밀번호</L.InputLabel>
          <L.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
          ></L.UserInput>
        </L.InputContainer>
        <br></br>
        <L.Complete onClick={goHome}>완료</L.Complete>
      </L.Container>
    </>
  );
}
