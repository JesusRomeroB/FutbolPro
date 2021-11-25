import styled from 'styled-components';

export const HeaderSection = styled.div`
  margin-top: 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 220px;

  &::before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: MidnightBlue;
    opacity: 0.3;
  }
`;
export const HeaderImage = styled.div`
  background-image: url('https://cdn.wallpapersafari.com/41/99/jSGbMF.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const HeaderText = styled.div`
  position: relative;
  padding: 35px 0 15px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;
`;
