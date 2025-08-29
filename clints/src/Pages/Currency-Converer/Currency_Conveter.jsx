import React, { useState, useEffect } from "react";
import currencie from "../../Constants/countries_currency.json";
export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(null);
  const [output, setOutput] = useState("");  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

useEffect(() => {
  
  fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
    .then(res => res.json())
    .then(data => {
      if (data.result === "success") { // check actual API response
       setRate(data.rates[toCurrency])
      } else {
        setForecastData([]);
      }
    })
    .catch(err => console.error(err));
}, [fromCurrency, toCurrency]);

useEffect(() => { 
  setOutput(rate*amount)
},[amount,rate])

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#141414] overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >

      {/* MAIN CONTENT */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Title */}
          <div className="flex flex-wrap gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white text-[32px] font-bold">
                Currency Converter
              </p>
              <p className="text-[#ababab] text-sm">
                Convert currencies with real-time exchange rates.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium pb-2">Amount</p>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg bg-[#303030] text-white h-14 px-4 placeholder:text-[#ababab] focus:outline-none"
              />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium pb-2">From</p>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full rounded-lg bg-[#303030] text-white h-14 px-4 focus:outline-none"
              >
               {Object.entries(currencie).map(([key ,info]) => (
                
                  <option key={key} value={key}>
                    {info.name}, {info.symbolNative}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium pb-2">Converted</p>
              <input
                type="text"
                readOnly
                value={
                  amount
                    ? `${1} ${fromCurrency} = ${
                        (rate).toFixed(2) // just mock conversion
                      } ${toCurrency}`
                    : ""
                }
                placeholder="Converted amount"
                className="w-full rounded-lg bg-[#303030] text-white h-14 px-4 placeholder:text-[#ababab] focus:outline-none"
              />
            </label>
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium pb-2">To</p>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full rounded-lg bg-[#303030] text-white h-14 px-4 focus:outline-none"
              >
                {Object.entries(currencie).map(([key ,info]) => (
                  <option key={key} value={key}>
                    {info.name}, {info.symbolNative}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Result Section */}
          <h1 className="text-white text-[22px] font-bold px-4 pt-5">
            Converted Amount
          </h1>
          <p className="text-white px-4 pt-1">
            {amount
              ? `${amount} ${fromCurrency} = ${(amount * rate).toFixed(
                  2
                )} ${toCurrency}`
              : "Enter an amount to convert"}
          </p>

          {/* Exchange Rate Trends */}
          <h2 className="text-white text-[22px] font-bold px-4 pt-5">
            Exchange Rate Trends
          </h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2">
              <p className="text-white">{fromCurrency} to {toCurrency}</p>
              <p className="text-white text-[32px] font-bold">{rate}</p>
              <div className="flex gap-1">
                <p className="text-[#ababab]">Last 30 Days</p>
                <p className="text-[#fa3838] font-medium">-0.5%</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
