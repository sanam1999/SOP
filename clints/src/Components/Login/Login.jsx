import { useState } from "react";

export default function GoogleLoginPopup() {
  const [user, setUser] = useState(true);
  const [error, setError] = useState(""); 
  

  return (
    <>
      {user ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl w-[350px] flex flex-col items-center relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setError("You should login first")} // closes popup
            >
              ✕
            </button>

            {/* Google Sign-in Button */}
            <button className="flex items-center gap-3 border border-gray-300 px-5 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google Logo"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">
                Sign in with Google
              </span>
            </button>
          {error && <p className="text-red-700 mt-2 text-sm">{error}</p>}

          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

