import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/"><div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TravelMate</h2>
        </div>
        </Link>
        <div className="flex items-center gap-9">
           <Link className="text-white text-sm font-medium leading-normal" to="/">Dashboard</Link>
  <Link className="text-white text-sm font-medium leading-normal" to="/currency-converter">Currency Converter</Link>
  <Link className="text-white text-sm font-medium leading-normal" to="/weather">Weather</Link>
  <Link className="text-white text-sm font-medium leading-normal" to="/country-info">Country Info</Link>
  <Link className="text-white text-sm font-medium leading-normal" to="/saved-trips">Saved Trips</Link>

        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#363636] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </div>
        </button>

       <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYFZr5h6GJMydzZMYSQ5PymrFNslJ3d8iR4S-MiLBAkJ1Z8urj2GYLNW6q3H2oalBpb0apYKzpXzJA3ymTGXtvCQBugxLmXtjat8nLG9PczBDwurex5hmg-0xkFBykYcld7594hQkxjyNniN2aCinjCMxjCAsJ6TsYuaZQ4uC0PuBftzzXDS3l3_pkx8uZkry9-LiAH9yyLys3gksd5yDQUQwLaWXtUllla_9yOSi5JJ27gy8QCZpnNgvjGIwYttY0ua4kjV98MVmp")',
              }}
      ></Link>
      </div>
    </header>
  );
}
