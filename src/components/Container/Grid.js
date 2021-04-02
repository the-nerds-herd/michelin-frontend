// import styled from 'styled-components';

// const Grid = styled.section`
// 	display: grid;
// 	grid-gap: ${(props) => (props.gap ? props.gap : '0')};
// 	grid-template-columns: ${(props) =>
// 		`repeat(auto-fit, minmax(${props.minWidth || '200px'}, .5fr))`};
// `;
// export default Grid;

import styled from 'styled-components';
const Grid = styled.section`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export default Grid;