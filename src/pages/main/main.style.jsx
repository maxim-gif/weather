import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  border: 2px solid grey;
  border-radius: 30px;
  overflow: hidden;
`;

export const Error = styled.div`
color: red;
margin-bottom:10px;
`;

export const CurrentDay = styled.div`
  display: flex;
  height: 50vh;
  background-image: url("/weather.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 550px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  @media (max-height: 800px) {
    height: 40vh;
  }
`;

export const DopInfo = styled.div`
  display: flex;
  height: 50vh;
  background: rgb(196, 233, 245);
  background: linear-gradient(
    180deg,
    rgba(196, 233, 245, 1) 0%,
    rgba(255, 255, 255, 1) 28%
  );
  @media (max-width: 1170px) {
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 40px 0 40px 0;
  }
  @media (max-height: 800px) {
    height: 60vh;
  }
`;

export const MainInfo = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1170px) {
    width: 50vw;
  }
  @media (max-width: 820px) {
    width: 60vw;
  }
  @media (max-width: 550px) {
    width: 100vw;
    height: 50%;
    padding-bottom: 70px;
  }
  @media (max-height: 800px) {
    height: 70%;
  }
`;

export const NameCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 67vw;
  font-size: 100px;
  color: white;
  @media (max-width: 1170px) {
    font-size: 50px;
    width: 50vw;
  }
  @media (max-width: 820px) {
    width: 40vw;
  }
  @media (max-width: 550px) {
    width: 100vw;
    height: 50%;
  }
  @media (max-height: 800px) {
    height: 30%;
    margin-bottom:20px; 
  }
`;

export const Temperature = styled.div`
  font-size: 120px;
  color: white;
  @media (max-width: 820px) {
    font-size: 100px;
  }
  @media (max-height: 800px) {
    font-size: 80px;
  }
`;

export const Description = styled.div`
  font-size: 45px;
  color: white;
  @media (max-width: 820px) {
    font-size: 30px;
  }
  @media (max-height: 800px) {
    font-size: 25px;
  }
`;

export const HumAndWind = styled.div`
  display: flex;
  font-size: 50px;
  color: white;
  margin-top: 50px;
  @media (max-width: 820px) {
    font-size: 30px;
  }
  @media (max-height: 800px) {
    margin-top: 20px;
  }
`;

export const Humidity = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  flex-direction: column;
  font-size: 30px;
  color: white;
  @media (max-width: 820px) {
    width: 150px;
    font-size: 25px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

export const Wind = styled(Humidity)`
  border-left: 3px solid #C0C0C0;
`;

export const GetCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 33vw;
  & > span {
    font-size: 30px;
    @media (max-width: 550px) {
      font-size: 20px;
    }
  }
  @media (max-width: 1170px) {
    width: 100vw;
  }

  
`;

export const DaysContainer = styled.div`
  display: flex;
  align-items: center;
  width: 67vw;
  @media (max-width: 1170px) {
    width: 100vw;
  }
`;

export const InputCity = styled.input`
  height: 50px;
  width: 350px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 1170px) {
    height: 40px;
    width: 250px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const ButtonCity = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 20px;
  border: none;
  background: rgba(196, 233, 245, 1);
  @media (max-width: 550px) {
    height: 40px;
    width: 150px;
  }
`;

export const Days = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 15%);
  column-gap: 15px;
  width: 100%;
  height: 300px;
  border-left: 4px solid grey;
  @media (max-width: 1170px) {
    border-left: none;
    height: 200px;
  }
`;

export const ItemDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > span {
    @media (max-width: 550px) {
      font-size: 10px;
    }
  }
`;
export const DayImage = styled.img`
  height: 60%;
  width: 100%;
  @media (max-width: 1170px) {
    height: 50%;
  }
  @media (max-width: 550px) {
    height: 30%;
  }
`;

export const TempDay = styled.div``;

export const DayDescription = styled.div`
  display: flex;
  font-size: 13px;
  @media (max-width: 550px) {
    font-size: 10px;
  }
`;
