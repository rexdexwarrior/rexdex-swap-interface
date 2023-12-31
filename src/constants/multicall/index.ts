import { ChainId } from '@rexdexwarrior/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xBa5934Ab3056fcA1Fa458D30FBB3810c3eb5145f',
  [ChainId.ROPSTEN]: '0x14095a721Dddb892D6350a777c75396D634A7d97',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
