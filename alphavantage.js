class Stock {
  constructor(interval, symbolSearch) {
    this.apiKey = "PY7CW15TFQ57M1B5";
    this.symbol = "ba";
    this.interval = interval;
    this.timeFrame = "TIME_SERIES_DAILY";
    this.symbolSearch = symbolSearch;
  }
  //Fetch stock data from API
  async getStock() {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=${this.timeFrame}&symbol=${
        this.symbol
      }&interval=${this.interval}&apikey=${this.apiKey}`
    );

    const responseData = await response.json();
    return responseData;
  }
  //Fetch stock quate from API
  async getQuote() {
    const response1 = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
        this.symbol
      }&interval=${this.interval}&apikey=${this.apiKey}`
    );

    const response1Data = await response1.json();

    return response1Data;
  }
  //Fetch SearchEndpoint from API
  async getSearchEndpoint() {
    const response2 = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${
        this.symbolSearch
      }&apikey=${this.apiKey}`
    );
    const response2Data = await response2.json();

    return response2Data;
  }

  changeSymbol(symbol) {
    this.symbol = symbol;
  }
  changeInterval(interval) {
    this.interval = interval;
  }
  changeTimeFrame(timeFrame) {
    this.timeFrame = timeFrame;
  }
  changeSymbolSearch(symbolSearch) {
    this.symbolSearch = symbolSearch;
  }
}
