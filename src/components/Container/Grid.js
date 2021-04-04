import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 20px;
`;

export default Grid;