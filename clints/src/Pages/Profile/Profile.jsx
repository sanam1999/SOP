import { useState } from "react";
import Setting from "./Setting";
import ActivityHistory from "./ActivityHistory";  
function Profile() {
  const [Tab, setTab] = useState("ActivityHistory");
 return (
    <div className="relative flex min-h-screen flex-col bg-[#1a1a1a] dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1500px] flex-1">

            {/* Profile Section */}
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWmqDrl-wTUT1I8kq3zSEHcovsRMSFY30tV3IKVzHSS3zUf5YaVzpfRzdBHbLf08J8zqDbl88gw5e8oAtScqFO3q8qjkE_TPqZDqZZw7POiko3P9MYNoCKiUtW4OUnz5G0-zEwWzTGFZl-vbTmpoXCgk_yltxY9fxaHKjeYGKCm5uhX4_gcOVwaaNChsEkUGRvwrJoyUL61r6J-yzDluIODJWfrIp_9bQZT7btpU4SnQbz-qBF4JtZLk3MSZ3bddwWnt1Xv8WhRDRB")'
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Olivia Bennett
                    </p>
                    <p className="text-[#adadad] text-base font-normal leading-normal text-center">
                      olivia.bennett@email.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
           <div className="pb-3">
  <div className="flex border-b border-[#4d4d4d] px-4 gap-8">
    <div
      className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#adadad] pb-[13px] pt-4 cursor-pointer"
      onClick={() => setTab("ActivityHistory")}
    >
      <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${Tab === "ActivityHistory" ? "text-white" : ""}`}>
        Activity History
      </p>
    </div>
    <div
      className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#adadad] pb-[13px] pt-4 cursor-pointer"
      onClick={() => setTab("setting")}
    >
      <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${Tab === "setting" ? "text-white" : ""}`}>
        Settings
      </p>
    </div>
  </div>
</div>

{Tab === "ActivityHistory" ? <ActivityHistory /> : <Setting />}
<button className="w-[150px] px-6 py-2  bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">
  Logout
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
