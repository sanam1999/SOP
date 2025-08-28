import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Plan Your Trip Smarter
        </h2>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Overview
        </h2>

        <div className="p-4">
          {/* Currency Conversion Card */}
          <div className="flex items-stretch justify-between gap-4 rounded-lg bg-neutral-800 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-bold leading-tight">Currency Conversion</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">
                  Convert between currencies with real-time exchange rates.
                </p>
              </div>
              <Link to='/currency-converter' className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#363636] text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Go</span>
              </Link>
            </div>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover flex-1 rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5TG9wS0fXvlKGZxHNyPqJklIwfzzNnJoWXmkQihnNL6AD6gIGIo7BIzZOuTGJzgRuhFrGB0ztbXy6RdD20MJx4txL7Fw3tIjz0FiPh46zM-WkU2vGCqLMkxg2Hj2nWbR6bK2XArg2YkjksAjFpCC88lJBrxV4EFY15CIVtqCLvd0g0ZS4LKBKYgwXvw1nLy9o8koBfsAN2RABgK8VwNSsOeiM0PRZv-AGGW01-SJWPgplRISznzhATcYOCimz5WRRkFLzsc1HUFoc")' }}>
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Weather Updates Card */}
          <div className="flex items-stretch justify-between gap-4 rounded-lg bg-neutral-800 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-bold leading-tight">Weather Updates</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">
                  Get the latest weather information for your destination.
                </p>
              </div>
              <Link to="/weather" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#363636] text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Go</span>
              </Link>
            </div>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover flex-1 rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW5S_94x1VFj2C4rXWzwfpQy9MxAbDBqw9tKrziTFUosADdm70KaavIVGMusAZJp0avbzAOKuFiFHUc7-jWUNutlAwGsXZhynKscbyDOeXfSEZ1VxzPda6pLomD2AQIyRjjXMgqnFQIQlS6_DRCv4qaA07fTrCMeJ9MP69BetMMDDC26OfuwcIxASNkwGIvmsKvAAcKoWnHjB0s4PiMYIYot6reDuymgkulXnuT2ONiUNnlU8pC0-i0S407EyohV6YTUNr33jbnTaI")' }}>
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Country Details Card */}
          <div className="flex items-stretch justify-between gap-4 rounded-lg bg-neutral-800 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-bold leading-tight">Country Details</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">
                  Explore country information, including population, currency, and language.
                </p>
              </div>
              <Link to="/country-info" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#363636] text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Go</span>
              </Link>
            </div>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover flex-1 rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLJkzgXd0NSmKA7tWh1F-UJEqnyAf4V5DZC0UsOUURYWrUu8dTJSPimx4qSvwelu4XdroOvDXUVsu67Ix_5BRkB6XvT-wMvichea9RB3zRpOTrVcNk_Z-2wWqPNmrj41q70di-w6Lq0ilTLQpedV_nLMPTL9cIh1884_5p_ZXY9K_PLROFY0rTjZy3eLM7AxPl1ajIEcZsie_G15b5QUmhmZgUQiVAiOZCnqz_SZPXJZaqdwC5ujsflJfRubq2wv6u8Bdnlc9fVvkX")' }}>
            </div>
          </div>
        </div>

        {/* Saved Trips Section */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Saved Trips
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOfJYr5VYT9DNnVrabVykY_jpxOTlLcrMc23cjlRQM6i9Z5gvHEFzvwCxLL5O86r769e5N0GSlT-TntY387M_GYLfCKZnx5mTjf391yFCBhku7bwE1dGqBDgJPJ5V8NGuQkXyzwNcK7jTQhIOk-KH5gbeCycCKSoyhGJQEXHmCCn4WUjbN0i6n_PSSvWLGgRRHRhotq9CdEJEo2U7JtGeQCSPkcr67G198qY9Xmxhq_2yGbB3MdRIma827K9Ppl8OePEqoylGtZGUu")' }}>
            </div>
            <p className="text-white text-base font-medium leading-normal">Paris Adventure</p>
          </div>

          <div className="flex flex-col gap-3 pb-3">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8iB_4StnqobGqdLItCZrO3GBOS7-NHMQpfoYOdJgLj6uFSSGYVXF8GUb6JRVnF1yoUcOP-6Xh6R5DMOCy2-FvQ4eyrYt7iMe-x23GJMfG5JL1WnzKQsUmZqehgIzu7RUT87I-0LHDXgECtHsJHMflLjfznlJazu2MJZLpYQ5cio2aHo6_IGAO9s53bd4Latv-6cYjq1pm3OBMCcwl58_q1-xv0dzV8rJtC_d_erdqG6-nEBf4bRqxOU8TFcyeNQTU-274R7kbEQbo")' }}>
            </div>
            <p className="text-white text-base font-medium leading-normal">Tokyo Exploration</p>
          </div>

          <div className="flex flex-col gap-3 pb-3">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALGciiFH-pHQPrKuhtfDS0_QnnFFRM7lkRscA6KNmhz-IJPcgvQjB3EDtknUHrOqqKe-pQn8kDMeCM8gZBgcv9dZe_3Vd4ZaglUOmqATevnVE9SDesu5lxfqfqW7KQmZJvG31Jz3CZkK8CfFm6TfZTV6syko7QB6fEO5lpmz5ZjrxEbj2d-xWa2U7QX7s1CxwQvNTSbtIfnfmlzael-PQkK82B9vKBKx9WZMEAd4UqSOhBB6gcM4knzfehc0iAmNMyCDSxcT1iCEq6")' }}>
            </div>
            <p className="text-white text-base font-medium leading-normal">Rome Getaway</p>
          </div>
        </div>

        {/* Analytics & Insights */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Analytics &amp; Insights
        </h2>

        <div className="flex flex-wrap gap-4 px-4 py-6">

          {/* Most Searched Countries */}
          <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#4d4d4d] p-6">
            <p className="text-white text-base font-medium leading-normal">Most Searched Countries</p>
            <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">3</p>
            <div className="flex gap-1">
              <p className="text-[#adadad] text-base font-normal leading-normal">Last 7 Days</p>
              <p className="text-[#0bda0b] text-base font-medium leading-normal">+10%</p>
            </div>
            <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
              <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">France</p>
              <div className="h-full flex-1">
                <div className="border-[#adadad] bg-[#363636] border-r-2 h-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Japan</p>
              <div className="h-full flex-1">
                <div className="border-[#adadad] bg-[#363636] border-r-2 h-full" style={{ width: '20%' }}></div>
              </div>
              <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Italy</p>
              <div className="h-full flex-1">
                <div className="border-[#adadad] bg-[#363636] border-r-2 h-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          {/* Exchange Rate Trends */}
          <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#4d4d4d] p-6">
            <p className="text-white text-base font-medium leading-normal">Exchange Rate Trends</p>
            <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">1.12</p>
            <div className="flex gap-1">
              <p className="text-[#adadad] text-base font-normal leading-normal">USD to EUR</p>
              <p className="text-[#fa3838] text-base font-medium leading-normal">-0.5%</p>
            </div>
            <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
              <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#adadad" strokeWidth="3" strokeLinecap="round"></path>
                <defs>
                  <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#363636"></stop>
                    <stop offset="1" stopColor="#363636" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-around">
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                <p className="text-[#adadad] text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

