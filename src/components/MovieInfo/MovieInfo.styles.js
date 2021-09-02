import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  max-height: max-content;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 25px 25px 20px 25px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    padding: 0;
  }
`;

export const Text = styled.div`
  /* position: relative; */
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  /* height: 100%; */

  .rating-directors {
    /* display: flex; */
    justify-content: flex-start;
  }

  .btn {
    margin-top: 50px;
    /* text-align: center; */

  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
  p {
    margin: 0;
  }
  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Button = styled.button`
  padding: 10px 40px;
  background: yellow;
  color: #000;
  outline: none;
  border: none;
  font-size: var(--fontSmall);
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  :hover{
    opacity: 0.8;
  }
`;
