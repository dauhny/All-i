import React from "react";
import * as R from "../styles/styledRegister";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/home`);
  };

  return (
    <>
      <R.Container>
        <R.Group>
          <img src="/images/Group.svg" alt="Group" />
        </R.Group>
        <R.Ellipse549></R.Ellipse549>
        <br />
        <br />
        <br />
        <br />
        <br />
        <R.InputContainer>
          <R.InputLabel>아이디</R.InputLabel>
          <R.UserInputShort
            type="text"
            placeholder="아이디를 입력하세요."
          ></R.UserInputShort>
          <R.CheckId>중복체크</R.CheckId>
          <br></br>
          <R.InputLabel>비밀번호</R.InputLabel>
          <R.UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
          ></R.UserInput>
          <R.InputLabel>비밀번호 확인</R.InputLabel>
          <R.UserInputShort
            type="password"
            placeholder="비밀번호를 입력하세요."
          ></R.UserInputShort>
          <R.CheckPw>확인</R.CheckPw>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <R.InputLabel>이름</R.InputLabel>
          <R.Name type="text" placeholder="이름을 입력하세요."></R.Name>
          <br></br>
          <R.InputLabel>닉네임</R.InputLabel>
          <R.NickName
            type="text"
            placeholder="닉네임을 입력하세요."
          ></R.NickName>
          <R.CheckNickName>중복체크</R.CheckNickName>
          <R.InputLabel>생년월일</R.InputLabel>
          <R.SelectBirth type="date"></R.SelectBirth>
          <R.InputLabel>이메일</R.InputLabel>
          <R.Email type="email" placeholder="선택 입력"></R.Email>
          <R.InputLabel>휴대번호</R.InputLabel>
          <R.PhoneNumber type="tel" placeholder="대한민국 +82"></R.PhoneNumber>
          <R.PhoneNumber
            type="tel"
            placeholder="전화번호를 입력하세요."
          ></R.PhoneNumber>
          <R.PhoneNumber
            type="number"
            placeholder="인증번호를 입력하세요."
          ></R.PhoneNumber>
          <R.Complete onClick={goHome}>가입하기</R.Complete>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <R.InfoText>
            다음으로는 회원님의 취향을 알아보고 추천하기 위한 단계 입니다.
          </R.InfoText>{" "}
          <br></br> <R.SkipBtn onClick={goHome}>건너 뛰기</R.SkipBtn>
          <R.PinkBlur>
            <img src="/images/PinkBlur.svg" alt="Group" />
          </R.PinkBlur>
          <R.InfoTextSmall>관심 있는 키워드를 골라주세요.</R.InfoTextSmall>
          <br></br>
          <R.SelectBox>디자인</R.SelectBox>
          <R.SelectBox>서양화</R.SelectBox>
          <R.SelectBox>동양화</R.SelectBox>
          <br></br>
          <R.SelectBox>건축</R.SelectBox>
          <R.SelectBox>미디어 아트</R.SelectBox>
          <R.SelectBox>풍경화</R.SelectBox>
          <br></br>
          <R.SelectBox>현대 미술</R.SelectBox>
          <R.SelectBox>공예</R.SelectBox>
          <R.SelectBox>사진</R.SelectBox>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
          <R.InfoTextSmall>좋아하는 분위기를 골라주세요.</R.InfoTextSmall>
          <br></br>
          <R.SelectBox>웅장한</R.SelectBox>
          <R.SelectBox>감동적인</R.SelectBox>
          <R.SelectBox>아늑한</R.SelectBox>
          <br></br>
          <R.SelectBox>평온</R.SelectBox>
          <R.SelectBox>사회비판적인</R.SelectBox>
          <R.SelectBox>어두운</R.SelectBox>
          <br></br>
          <R.SelectBox>재미있는</R.SelectBox>
          <R.SelectBox>아기자기한</R.SelectBox>
          <R.SelectBox>퇴폐한</R.SelectBox>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
          <R.InfoTextSmall>
            좋아하는 작가가 있다면 선택해 주세요.
          </R.InfoTextSmall>
          <br></br>
          <R.BlackCircleContainer>
            <R.BlackCirclePurple></R.BlackCirclePurple>{" "}
            <R.BlackCirclePurple></R.BlackCirclePurple>{" "}
            <R.BlackCirclePurple></R.BlackCirclePurple>{" "}
            <R.BlackCirclePurple></R.BlackCirclePurple>
          </R.BlackCircleContainer>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <R.InfoText>환영합니다. </R.InfoText>
          <br></br>
        </R.InputContainer>
      </R.Container>
    </>
  );
}
