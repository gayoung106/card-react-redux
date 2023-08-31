import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  DetailWrap,
  DetailName,
  DetailKor,
  DetailContentWrap,
  DetailVideo,
  DetailDesc,
  BtnPerspective,
  BackButton,
} from "./styledComp";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contents = useSelector((state) => state.contents);

  const currentPath = location.pathname;
  const content = contents.find((c) => c.path === currentPath);

  return (
    <Container>
      <DetailWrap>
        <DetailName>
          {content.detail.name}
          <DetailKor>{content.detail.korName}</DetailKor>
        </DetailName>

        <DetailContentWrap>
          <DetailVideo
            dangerouslySetInnerHTML={{ __html: content.detail.videoSrc }}
          />
          <DetailDesc>{content.detail.desc}</DetailDesc>
        </DetailContentWrap>
        <BtnPerspective>
          <BackButton onClick={() => navigate(-1)}>BACK</BackButton>
        </BtnPerspective>
      </DetailWrap>
    </Container>
  );
};

export default Detail;
