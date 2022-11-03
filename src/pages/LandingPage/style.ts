import styled from "styled-components";

export const MainLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://i.imgur.com/xNMEX8F.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    height: calc(100vh - 120px);
    justify-content: space-around;
  }
`;

export const SectionServices = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .servicesContent {
    padding: 0 30px;
    color: var(--white);

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;

      p {
        margin-bottom: 30px;
      }

      h1 {
        font-size: 2rem;
      }
    }
  }

  .servicesImage {
    display: none;
  }

  @media (min-width: 768px) {
    .servicesImage {
      align-self: center;
      display: block;

      img {
        margin-top: 10px;
        width: 400px;
        height: 300px;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .servicesImage {
      img {
        margin-top: 0;
        width: auto;
        height: auto;
      }
    }

    .servicesContent {
      padding: 0;
    }
  }
`;

export const SectionTeam = styled.section`
  margin: 30px 0;

  ul {
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    gap: 10px;
    color: var(--white);
    padding: 0 10px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      min-width: 280px;
      height: 200px;
      background: radial-gradient(
        circle,
        rgba(252, 70, 107, 1) 0%,
        rgba(63, 94, 251, 1) 100%
      );
    }

    @media (min-width: 1024px) {
      justify-content: space-around;
      padding: 0;
    }
  }

  .infoMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    img {
      margin: 5px 0;
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
  }

  .memberLinks {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    a {
      display: flex;
      gap: 5px;
      text-decoration: none;
      color: var(--white);
    }
  }
`;
