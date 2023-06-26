import { Currency, ETHER, Token } from '@rexdexwarrior/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'WAN'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
