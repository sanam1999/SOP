import { useState, useEffect } from "react";

export default function Country() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!country) return; // prevent fetch when country is empty

    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          setCountryData(data[0]);
          console.log(data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [country]);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#1a1a1a] overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Search Input */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#adadad] flex border-none bg-[#363636] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  🔍
                </div>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  placeholder="Search for a country"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] h-full placeholder:text-[#adadad] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  onKeyDown={(e) =>
                    e.key === "Enter" && setCountry(input)
                  }
                />
              </div>
            </label>
          </div>

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Flag or Default BG */}
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className=" bg-center bg-no-repeat bg-cover flex flex-col justify-end  overflow-hidden bg-[#1a1a1a] @[280px]:rounded-lg min-h-[318px]"
                  style={{
                    backgroundImage: countryData
                      ? `url(${countryData.flags?.png})`
                      : `url("https://via.placeholder.com/300x200")`,
                  }}
                ></div>
              </div>
            </div>

            {/* Country Name */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                {countryData?.name?.common || "Country Name"}
              </p>
            </div>

            {/* Details */}
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Population</p>
                <p className="text-white text-sm">
                  {countryData?.population?.toLocaleString() ||
                    "100 million"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Currency</p>
                <p className="text-white text-sm">
                  {countryData?.currencies
                    ? Object.values(countryData.currencies)
                        .map((c) => `${c.name} (${c.symbol})`)
                        .join(", ")
                    : "USD ($)"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Official Language(s)</p>
                <p className="text-white text-sm">
                  {countryData?.languages
                    ? Object.values(countryData.languages).join(", ")
                    : "English"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Time Zone(s)</p>
                <p className="text-white text-sm">
                  {countryData?.timezones?.join(", ") || "EST"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Capital</p>
                <p className="text-white text-sm">
                  {countryData?.capital?.[0] || "Unknown"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Region</p>
                <p className="text-white text-sm">
                  {countryData?.region || "Unknown"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">Borders</p>
                <p className="text-white text-sm">
                  {countryData?.borders?.join(", ") || "None"}
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
                <p className="text-[#adadad] text-sm">GoogleMaps</p>
                <a
                  className="text-white underline text-sm"
                  href={countryData?.maps?.googleMaps || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {countryData?.maps?.googleMaps || "N/A"}
                </a>
              </div>
            </div>

  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Overview</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          {countryData?.name?.common || "Country Name"} is a vibrant nation known for its rich history, diverse landscapes, and welcoming culture. From bustling cities to serene natural wonders, it offers a
          unique blend of experiences for every traveler.
        </p>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Visa Requirements</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Visa requirements vary depending on your nationality. Please check with the embassy or consulate of Country Name in your country for the most up-to-date information.
        </p>

      
      </div>
    </div>
        </div>
      </div>
  );
   

}