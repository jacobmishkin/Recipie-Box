import styled from 'styled-components';

const Underline = styled.span`
  display: block;
  width: 120px;
  height: 1px;
  background: ${props => props.theme.black};
  padding: 0 1rem;
`;

export default Underline;
