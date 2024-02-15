import { css, keyframes } from "hono/css";
const paperAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
`;

const scrollAnimation = keyframes`
  0% {
    right: 400;
  }
  100% {
    right: 0;
  }
`;

export const scroll = css`
  height: 140%;
  aspect-ratio: 1 / 8;
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-15%);
  border-radius: 20px;
  scale: 1 0.8;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: -3;
    left: 0;
    width: 50%;
    height: 8%;
    transform: translateX(50%);
    border-radius: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background-color: black;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    border-radius: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background-color: #0f0;
  }
`;
export const container = css`
  position: relative;
  width: fit-content;
  display: flex;
`;
export const paper = css`
  background-color: #eea;
  transform-origin: right;
  aspect-ratio: 1.6/1;
  writing-mode: vertical-rl;
  padding: 16px;
  min-height: 200px;
  max-width: 300px;
  animation-fill-mode: forwards;
  overflow: scroll;
  transform-origin: right;
  animation-name: ${paperAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  border-radius: 16px 0 0 16px;
  border: 16px solid green;
  position: relative;
`;

export const stopper = css`
  width: 10px;
  background-color: black;
`;
