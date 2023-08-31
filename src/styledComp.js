import styled, { keyframes } from "styled-components";

export const backglow1 = keyframes`
  0% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translate(-10%, 10%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-10%, -10%) scale(1.2);
    opacity: 0.8;
  }
  75% {
    transform: translate(10%, -10%) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }
`;

export const backglow2 = keyframes`
  0% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translate(10%, -10%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(10%, 10%) scale(1.2);
    opacity: 0.8;
  }
  75% {
    transform: translate(-10%, 10%) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 80vh;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: -5%;
    left: -5%;
    height: 110%;
    width: 110%;
    border-radius: 50%;
    opacity: 0.5;
    filter: blur(60px);
  }

  &::after {
    background-color: #d40317;
    z-index: -1;
    animation: ${backglow2} 15s ease infinite;
  }

  &::before {
    background-color: #333333;
    z-index: -2;
    animation: ${backglow1} 15s ease infinite;
  }
`;

export const Menu = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 300px;
  font-size: 18px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  max-height: 800px;
  max-width: 1800px;
  min-height: 600px;
  min-width: 720px;
  margin: 0 auto;
`;

export const Item = styled.div`
  height: 379px;
  width: 260px;
  /* width: 100%; */
  background: black;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
  padding: 5px;
  filter: grayscale(100%);

  background: url("${(props) => props.bgImage}") center center no-repeat;
  background-size: 300px;

  &:hover {
    background: url("${(props) => props.hoverBgImage}") left center no-repeat;
    background-size: 450px;
    filter: grayscale(0%);
  }
`;
export const Image = styled.div`
  height: 250px;
  background-image: url(${(props) => props.imagePath});
  background-repeat: no-repeat;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;

export const H1 = styled.h1`
  font-family: "Giants-Inline";
  text-align: center;
  color: #fff;
  margin: 20px;

  /* opacity: 0; */
`;

export const DetailWrap = styled.div`
  padding-top: 20px;
  text-align: center;
  color: black;
`;

export const DetailName = styled.span`
  font-family: "Giants-Inline";
  font-weight: 700;
  font-size: 70px;
  color: #fff;
  font-weight: 900;
`;

export const DetailKor = styled.em`
  font-size: 25px;
  color: #727375;
  font-weight: 900;
`;

export const DetailContentWrap = styled.div`
  width: 50%;
  color: #d4d1ce;
  font-size: 18px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailDesc = styled.p`
  font-family: "HakgyoansimWoojuR";
  font-weight: 900;
  margin-top: 50px;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;

export const DetailVideo = styled.div`
  margin-top: 40px;
`;

const rotateX = keyframes`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(-45deg);
  }
`;

export const BtnPerspective = styled.div`
  perspective: 800px;
  display: inline-block;
`;
export const BackButton = styled.button`
  font-family: "Giants-Inline";
  border: none;
  position: relative;
  background: #c0392d;
  padding: 28px 90px;
  display: inline-block;
  text-transform: uppercase;
  margin: 30px;
  color: inherit;
  letter-spacing: 2px;
  font-size: 0.9em;
  outline: none;
  transition: all 2s;
  cursor: pointer;
  color: #fff;
  display: block;
  outline: 1px solid transparent;
  transform-style: preserve-3d;
  background-color: ${(props) => props.backgroundColor};
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.4s;
    width: 100%;
    height: 42%;
    left: 0;
    top: -40%;
    background: #c0392d;
    transform-origin: 0% 100%;
    transform: rotateX(90deg);
  }
  &:hover {
    animation: ${rotateX} 0.4s forwards;
  }
`;
