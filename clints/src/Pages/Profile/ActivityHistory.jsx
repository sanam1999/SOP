export default function ActivityHistory() {
    return (
        <>
             <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Recent Activity</h3>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Currency Conversion: USD to EUR</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="Sun" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Weather Check: Paris, France</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">11:45 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="Globe" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Country Information: Italy</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">1:20 PM</p>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Older Activity</h3>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="CurrencyGbp" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M192,208a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h4a28,28,0,0,0,28-28V136H56a8,8,0,0,1,0-16H88V84a52,52,0,0,1,85.08-40.12A8,8,0,1,1,162.9,56.22,36,36,0,0,0,104,84v36h32a8,8,0,0,1,0,16H104v36a43.82,43.82,0,0,1-10.08,28H184A8,8,0,0,1,192,208Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Currency Conversion: GBP to JPY</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">9:15 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="Cloud" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Weather Check: London, UK</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#1a1a1a] px-4 min-h-[72px] py-2">
              <div className="text-white flex items-center justify-center rounded-lg bg-[#363636] shrink-0 size-12" data-icon="Globe" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Country Information: Spain</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal line-clamp-2">11:30 AM</p>
              </div>
            </div>
        </>
    );
}