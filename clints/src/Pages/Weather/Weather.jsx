import React from "react";
export default function Weather() {

  return (
    <div className="relative flex min-h-screen flex-col bg-[#1a1a1a] overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          
          {/* Search Input */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#adadad] flex border-none bg-[#363636] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search for a city"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] h-full placeholder:text-[#adadad] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>
          </div>

          {/* Current Temperature */}
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
            24°C
          </h1>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Sunny
          </p>

          {/* Main Hero Image */}
          <div className="flex w-full grow bg-[#1a1a1a] p-4">
            <div className="w-full gap-1 overflow-hidden bg-[#1a1a1a] aspect-[3/2] rounded-lg flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiL4UGhLTV1s-jW81WC8c_Mpxlu6QL44bJDAT0A0KkFznzEfViaEBOzcU5IvZI4X15SqoSefN15JP_RICzF3i08K3C-D_kAZCOvNg9g5VH_TOGNYKqQRoKnYGcLgFPHLNaavUFpVn0qKf83_HpRhZ24wS0g8PkLKHB21o7srytmd5XBh3XtV9A3fxVwuZIhNf1bSNTo2U_4CmFwxj_u6apuQ3Vq0trsDmlI7RXbntNpe-DF6DaozNI23Ktr1walz0thuOWaoT0xoLR")',
                }}
              ></div>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            5-Day Forecast
          </h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#4d4d4d] p-6">
              <p className="text-white text-base font-medium leading-normal">Temperature</p>
              <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">
                20°C - 25°C
              </p>
              <div className="flex gap-1">
                <p className="text-[#adadad] text-base font-normal leading-normal">Next 5 Days</p>
                <p className="text-[#0bda0b] text-base font-medium leading-normal">+2%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
