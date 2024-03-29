import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

export const PageBody = styled.main`
  position: relative;
  margin: calc(3em + 3vh) 0;
  display: grid;
  grid-gap: 0 4vw;
  grid-template-columns: 1fr 1fr minmax(8em, ${props => props.theme.maxWidth}) 1fr 1fr;
  grid-auto-rows: max-content;
  grid-auto-flow: dense;
  > * {
    grid-column: ${props => props.cols || 3};
  }
  ${mediaQuery.minPhablet} {
    > p {
      text-align: justify;
    }
  }
`
