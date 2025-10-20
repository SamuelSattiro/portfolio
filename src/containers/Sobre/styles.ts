import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    margin-left: 60px;

    @media (max-width: 980px) {
      margin-left: 18px;
    }
    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      margin-left: 0;
    }
  }
`
