import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1440px) {
    padding: 23px 80px 24px;
  }
  & > h1 {
    color: #111517;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.43;
    @media (min-width: 1440px) {
      font-size: 24px;
      font-weight: bold;
    }
  }
  & > p {
    color: #111517;
    font-size: 12px;
    font-weight: 600;
    @media (min-width: 1440px) {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const CountryContainer = styled.div`
  @media (min-width: 1440px) {
    padding: 48px 80px 45px 80px;
  }
  .input-div {
    padding: 24px 16px 40px;
    display: flex;
    justify-content: space-between;
  }

  .input-div input {
    padding: 14px 32px;
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    @media (min-width: 1440px) {
      width: 480px;
      padding: 18px 270px 18px 21px;
    }
  }

  .options {
    padding: 14px 19px 14px 24px;
    width: 100%;
    max-width: 200px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    margin-top: 40px;
  }

  .countries {
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 75px;
    }
  }

  .country_div_container {
    width: 264px;
    padding: 0 0 46px;
    border-radius: 5px;
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
    background-color: #fff;
  }

  .country_div_container img {
    width: 264px;
    height: 160px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .info_container {
    padding: 24px 16px;
  }

  .pre_info {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .pre_info p {
    display: flex;
    gap: 5px;
    color: #111517;
    font-weight: bold;
  }

  .pre_info span {
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .input-div input {
      padding: 14px;
    }
    .options {
      width: 100%;
    }
    .country_div_container {
      width: 100%;
    }
    .info_container {
      padding: 16px;
    }
    .countries {
      padding: 16px;
    }
  }
`;

export const DetailsContainer = styled.div`
  margin: 40px 21px 60px 21px;
  @media (min-width: 1440px) {
    padding: 80px 82px 343px 80px;
  }
  @media (min-width: 1440px) {
    .flex {
      display: flex;
      margin-top: 80px;
      gap: 120px;
    }
    .flex img {
      width: 560px;
      height: 402px;
      border-radius: 5px;
      border: none;
    }
    .flex_2 {
      display: flex;
      gap: 140px;
      margin-bottom: 70px;
    }
  }

  .back {
    width: 100%;
    max-width: 102px;
    padding: 6px 24px;
    border-radius: 2px;
    border: none;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.29);
    background-color: #fff;
    color: #111517;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    margin-bottom: 64px;
  }

  @media (max-width: 768px) {
    padding: 20px 8px 30px;

    .back {
      width: auto;
      padding: 6px 16px;
    }
  }

  .img {
    margin-bottom: 45px;
    border-radius: 5px;

    border: none;
  }
  .name {
    margin-bottom: 16px;
    color: #111517;
    font-size: 22px;
    font-weight: bold;
    @media (min-width: 1440px) {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: bold;
  }
  .money {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: bold;
    margin-bottom: 34px;
    @media (min-width: 1440px) {
      margin-top: 80px;
    }
  }
  .border {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .border p {
    width: 96px;
    height: 28px;
    margin: 16px 10px 0 28px;
    padding: 6px 30px;
    border-radius: 2px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: none;
  }
`;
