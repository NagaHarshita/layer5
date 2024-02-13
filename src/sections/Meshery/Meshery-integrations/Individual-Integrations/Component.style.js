import styled from "styled-components";

export const ComponentsWrapper = styled.div`
  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

  .componentimg {
    width: 70px;
    height: 70px;
  }
  .componentimg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .componentsSection {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 3rem 2rem 7rem 2rem;
  }
  .maincontainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${props => props.theme.grey212121ToGreyEEEEEE};
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    width: 100%;
    flex: 30%;
  }

  .items {
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    font-size: 0.875rem;
    transition: all .1s ease-in-out;
    line-height: 1.1875rem;
`;


