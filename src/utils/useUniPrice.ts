import { Currency, WETH } from '@rexdexwarrior/sdk'
import { useMemo } from 'react'
import {  WASP } from '../constants'
import { PairState, usePairs } from '../data/Reserves'
import { useActiveWeb3React } from '../hooks'
import { wrappedCurrency } from './wrappedCurrency'


export default function useUniPrice(): Number | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(chainId ? WASP[chainId] : undefined, chainId)
  
  //const USD = useMemo(() => (chainId === ChainId.MAINNET ? USDT : USDT1), [chainId])
  
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId ? WETH[chainId] : undefined, chainId ? WASP[chainId]: undefined],
    ],
    [chainId, wrapped]
  )

  //console.log('tokenPairs', tokenPairs)

  const [[uniPairState, uniPair]] = usePairs(tokenPairs)
  return useMemo(() => {
    if (!wrapped || !chainId) {
      return undefined
    }
    
    console.log('Uni Pair',uniPairState, uniPair);

    if (uniPairState === PairState.EXISTS)
    {
      return Number(uniPair?.priceOf(WASP[chainId]).toFixed(6)) * 0.1836;
      // console.log('REX Price',uniPair?.priceOf(WASP[chainId]).toFixed(6))
      // console.log('Reserve0',uniPair?.reserve0.toFixed(4));
      // console.log('Reserve1',uniPair?.reserve1.toFixed(4));
    }

    //console.log('failed to find price for', currency,waspEthPairState , waspEthPair)
    return undefined
  }, [chainId, wrapped,uniPairState, uniPair])
}
