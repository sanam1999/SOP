import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
     

        {/* Body */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-white text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              You've Taken a Detour!
            </h2>
            <p className="text-white text-base font-normal pb-3 pt-1 px-4 text-center">
              It seems you've wandered off the beaten path. The page you're
              looking for might have been removed, had its name changed, or is
              temporarily unavailable. Don't worry, we'll help you find your way
              back.
            </p>

            {/* Image Section */}
            <div className="flex w-full grow bg-[#1a1a1a] p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#1a1a1a] aspect-[4/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex-1"
                  style={{
                    backgroundImage:
                      'url("https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg")',
                  }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-black text-white text-sm font-bold grow">
                  <Link to={'/'} className="truncate">Back to Dashboard</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
