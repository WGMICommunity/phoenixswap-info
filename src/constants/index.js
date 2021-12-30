export const FACTORY_ADDRESS = '0x8C0aca9903E68C76Ef638bc16490C4C12B9D1eF1'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token lists
const PHOENIXSWAP_LIST = 'https://ipfs.io/ipfs/QmUcRpDChHhoXSoEyDXQTZJURYc7XtUvqkkUYa6KNdVspV?filename=phoenixswap.json'

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [PHOENIXSWAP_LIST]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = []

// pair blacklist
export const PAIR_BLACKLIST = []

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []
