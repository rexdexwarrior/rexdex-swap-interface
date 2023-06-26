import React from 'react'
import styled from 'styled-components'
import { useLastTruthy } from '../../hooks/useLast'
import { AdvancedSwapDetails, AdvancedSwapDetailsProps } from './AdvancedSwapDetails'
import { isMobile } from 'react-device-detect'

const AdvancedDetailsFooter = styled.div<{ show: boolean }>`
  position: absolute;
  left: ${isMobile ? '0' : '45px'};
  padding-top: 1rem;
  padding-bottom: 20px;
  
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border:1px solid rgba(255,255,255,0.2);
  border-top:0;
  color: ${({ theme }) => theme.text2};
  background-color: transparent;
  z-index: ${({ show }) => (show && isMobile ? '2' : '-1')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: transform 300ms ease-in-out;
`

export default function AdvancedSwapDetailsDropdown({ trade, ...rest }: AdvancedSwapDetailsProps) {
  const lastTrade = useLastTruthy(trade)

  return (
    <AdvancedDetailsFooter show={Boolean(trade)}>
      <AdvancedSwapDetails {...rest} trade={trade ?? lastTrade ?? undefined} />
    </AdvancedDetailsFooter>
  )
}
