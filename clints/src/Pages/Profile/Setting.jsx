export default function Setting() {
    return (
        <>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Account Management
            </h3>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Name</p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#4d4d4d] bg-neutral-800 h-14 placeholder:text-[#adadad] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#4d4d4d] bg-neutral-800 h-14 placeholder:text-[#adadad] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>

            {/* Default Currency */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Default Currency
            </h3>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#4d4d4d] bg-neutral-800 h-14 placeholder:text-[#adadad] p-[15px] text-base font-normal leading-normal">
                  <option value="one"></option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </label>
            </div>

            {/* Units of Measurement */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Units of Measurement
            </h3>
            <div className="flex flex-wrap gap-3 p-4">
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Celsius
                <input type="radio" className="invisible absolute" name="temperature" />
              </label>
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Fahrenheit
                <input type="radio" className="invisible absolute" name="temperature" />
              </label>
            </div>

            <div className="flex flex-wrap gap-3 p-4">
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Miles
                <input type="radio" className="invisible absolute" name="distance" />
              </label>
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Kilometers
                <input type="radio" className="invisible absolute" name="distance" />
              </label>
            </div>

            {/* Notification Preferences */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Notification Preferences
            </h3>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 flex-row">
                <input type="checkbox" className="h-5 w-5 rounded border-[#4d4d4d] border-2 bg-transparent" />
                <p className="text-white text-base font-normal leading-normal">Travel Updates</p>
              </label>
              <label className="flex gap-x-3 py-3 flex-row">
                <input type="checkbox" className="h-5 w-5 rounded border-[#4d4d4d] border-2 bg-transparent" />
                <p className="text-white text-base font-normal leading-normal">Exchange Rate Alerts</p>
              </label>
            </div>

            {/* Theme Customization */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Theme Customization
            </h3>
            <div className="flex flex-wrap gap-3 p-4">
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Light Mode
                <input type="radio" className="invisible absolute" name="theme" />
              </label>
              <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#4d4d4d] px-4 h-11 text-white relative cursor-pointer">
                Dark Mode
                <input type="radio" className="invisible absolute" name="theme" />
              </label>
            </div>
        </>
    );
}