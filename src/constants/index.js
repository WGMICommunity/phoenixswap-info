export const FACTORY_ADDRESS = '0xa818b4f111ccac7aa31d0bcc0806d64f2e0737d7'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token lists
const LEVINSWAP_LIST = 'https://ipfs.io/ipfs/QmWgmoPRMPKV17FJbGtMfEQm5Cgfq8Wb69BXTN1TSfSP5i?filename=levinswap-default.tokenlist.json'
const LEVINSWAP_STABLECOIN_LIST = 'https://ipfs.io/ipfs/QmWrhnRTCQ8CgSoNmHV6WsneLLhErouD4fQPpSaqhsibpD?filename=levinswap-stablecoin-tokenlist.json'
const REALT_LIST = 'https://api.realt.ch/v1/tokenList'
const REN_LIST = 'https://ipfs.io/ipfs/QmVfccE1JwFoXYD2KC3sMLjXNrCURXAUHQooogNrn3LZQf?filename=ren-default.tokenlist.json'
const SYNTHETIX_LST = 'https://ipfs.io/ipfs/QmbZvrV7YsF6eKP8umoauqi7FFTG4KgtQBjTeLfVFJpxZj?filename=synthetix-default.tokenlist.json'

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [LEVINSWAP_LIST, LEVINSWAP_STABLECOIN_LIST, REALT_LIST, REN_LIST, SYNTHETIX_LST]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
