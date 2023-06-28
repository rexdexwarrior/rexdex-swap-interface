import React from 'react'
import styled, { css } from 'styled-components'

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${props =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`
// animation: 2s ${rotate} linear infinite;
const AnimatedImg = styled.div`
  
  & > * {
    width: 200px;
  }
`

// eslint-disable-next-line react/prop-types
const LocalLoader = ({ fill }) => {
  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <img src={require('../../assets/svg/loader3.svg')} alt="loading-icon" />
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
