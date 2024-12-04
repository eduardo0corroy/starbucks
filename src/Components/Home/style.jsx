import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 80vh;
  padding: 0 5rem;  
  overflow: hidden;
  position: absolute;

  h2 {
    font-size: 40px;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1%;
    font-family: 'Inter', sans-serif;
  }
  
  h1 {
    font-size: 20px;
    color: #333;
    margin: 1rem;
    line-height: 1.3;
    span {
      color: #00754a;
      font-size: 70px;
    }
  }

  p {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    width: 90%;
    color: #666;
    line-height: 1.3; 
    margin: 1.5rem;
  }

  button {
    background-color: #037143;
    color: white;
    border: none;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005c37;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  div {
    display: flex;
    gap: 0.8rem;
    position: absolute;
    right: 600px;
    top: 400px;
    img {  
      width: 150%;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Copo = styled.img`
  width: 340px;
  position: absolute;
  margin-right: 40px;
  top: 18%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const Elipse = styled.img`
  position: absolute;
  width: 700px;
  z-index: 1; 
  right: 0%;
  transform: translateY(-50%);
  top:60%;
  visibility: visible;
  transition: transform 0.3s ease;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
   width: 300%;
  height: 100%;
  margin-top: 60px;
  left:180px;
  z-index: 5;
`; 