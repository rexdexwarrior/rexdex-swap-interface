import { Box as RebassBox } from 'rebass'
import styled, { css } from 'styled-components'
import { isMobile } from 'react-device-detect'

const panelPseudo = css`
  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 10px;
  }

  @media only screen and (min-width: 40em) {
    :after {
      content: unset;
    }
  }
`

const Panel = styled(RebassBox)`
  position: relative;
  // background-color: ${({ theme }) => theme.advancedBG};
  /* padding: 0 1.25rem; */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: ${isMobile ? '100%' : '35%'};
  max-width: 500px;
  height: 398px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6px;
  margin-right: 40px!important;
  box-shadow: 0px 1px 56px rgba(0,0,0,1);
  :hover {
    cursor: ${({ hover }) => hover && 'pointer'};
    border: ${({ hover, theme }) => hover && '1px solid' + theme.bg5};
  }

  ${props => props.background && `background-color: ${props.theme.advancedBG};`}

  ${props => (props.area ? `grid-area: ${props.area};` : null)}

  ${props =>
    props.grouped &&
    css`
      @media only screen and (min-width: 40em) {
        &:first-of-type {
          border-radius: 20px 20px 0 0;
        }
        &:last-of-type {
          border-radius: 0 0 20px 20px;
        }
      }
    `}

  ${props =>
    props.rounded &&
    css`
      border-radius: 6px;
      @media only screen and (min-width: 40em) {
        border-radius: 6px;
      }
    `};

  ${props => !props.last && panelPseudo}
`

export default Panel
