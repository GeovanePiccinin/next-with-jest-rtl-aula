import { IExchange } from "types/Exchange";

export const mockedData: IExchange[] = [
  {
    id: "binance",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    description: "",
    url: "https://www.binance.com/",
    image:
      "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: 819813.4453485216,
    trade_volume_24h_btc_normalized: 438579.17004861124,
  },
  {
    id: "gdax",
    name: "Coinbase Exchange",
    year_established: 2012,
    country: "United States",
    description: "",
    url: "https://www.coinbase.com",
    image:
      "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1621471875",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 2,
    trade_volume_24h_btc: 121295.00995195407,
    trade_volume_24h_btc_normalized: 121295.00995195407,
  },
];
