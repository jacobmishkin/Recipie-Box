import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 auto;
  text-align: center;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  a {
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: ${props => props.theme.black};
    padding: 0 1rem;
  }
  span {
    width: 20px;
    height: 1px;
    background: ${props => props.theme.black};
  }
`;

export default Title;
