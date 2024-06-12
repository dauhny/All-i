import React from "react";
import * as M from "../styles/styledMusicCommunity";

export function MusicCommunity() {
  return (
    <>
      <M.Container>
        <M.BlackCircleWhite>
          <img src="/images/BlackCircleWhite.svg" alt="BlackCircleWhite" />
        </M.BlackCircleWhite>
        <M.InfoText>
          고독한 예술가님께서 실리카겔의<br></br>T를 추천했어요!!
        </M.InfoText>
        <M.AlbumCover></M.AlbumCover>
        <M.MusicInfo>
          <p id={"songTitle"}>T</p>
          <br></br>
          <p id={"artist"}>실리카겔</p>
        </M.MusicInfo>
        <br />
        <M.UserText>
          저는 영원주의를 주제로 하는 이 전시를 둘러보면서 실리카겔의 T가
          떠올랐어요!! 이음악과 함께 작품을 둘러보니 잠시 시간여행을 다녀온 듯한
          심오한 기분이 들어서 더욱 좋더라구요 !! ㅎㅎ <br />
          <br />
          실리카겔의 보컬이자 작곡가 김한주의 해석을 빌려서 이 음악과 전시에
          대한 간단한 생각을 써보려해요~ 실리카겔의 T 에서 시간은 왜곡되지만,
          우리가 기억하는 유일한 것은 시간이 우리의 몸을 통과하여 지나간다는
          사실을 표현하고자 했어요. 인간이라는 존재는 ‘시간’에 의해서 한정되고
          왜곡되어지고 한계를 가지는 데, 이 시간의 굴레에서 탈출한 존재는 무한한
          가능성의 존재가 되는 것을 의미한다고 볼수 있죠~ 결국 시간은 왜곡되고
          또 시간에 의해서 한 인간 존재는 한정되어 지지만 변하지 않는 사실은
          시간은 흐르고 있다는 거에요. 우리가 경험하고 느꼈던 지난 시절을 어떻게
          받아들이며 살 것인가 그것이 문제 아닐까요. !!
        </M.UserText>
      </M.Container>
    </>
  );
}
