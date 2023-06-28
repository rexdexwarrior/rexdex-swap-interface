import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 1px 56px rgba(0,0,0,1);
  border-radius: 6px;
  padding: 15px;
`

export const BodyWrapperV1 = styled.div`
  position: relative;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 1px 56px rgba(0,0,0,1);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 0;
  backdrop-filter: blur(10px);
`

export const BodyWrapperV2 = styled.div`
  position: relative;
  width: ${isMobile ? '100%' : '500px'};
  min-height: 363px;
  
  box-shadow: 0px 1px 56px rgba(0,0,0,1);
  border-radius: 6px;
  padding: 15px;
  border:1px solid rgba(255,255,255,0.2);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper id="body-wrapper">{children}</BodyWrapper>
}

export function AppBodyV1({ children }: { children: React.ReactNode }) {
  return <BodyWrapperV1 id="body-wrapper">{children}</BodyWrapperV1>
}

export function AppBodyV2({ children }: { children: React.ReactNode }) {
  return <BodyWrapperV2 id="body-wrapper">{children}</BodyWrapperV2>
}
