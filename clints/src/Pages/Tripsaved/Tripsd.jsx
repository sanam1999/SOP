export default function SavedTrips() {
  const trips = [
    {
      title: "Paris Adventure",
      date: "Oct 15 - Oct 22, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHqRKt0rhVET94AZA9Z1NVPgX7Iv9BQDwKS3e-0vPmypCdWP-M3cojrWc9VZLy-h5zSrzhrF5Te9q2JWWnEOaRVtyHG2gtGbQfSAB6VSWiGt4EOIgr5dRrwY8r7K6ZOuLSj1CUg53hYRyynIqsOyixBsJvkDqOqoWUqYAOrmFVeNKJBiuc4zHSAKB-rU7wRnL5yX7TlMNedXtm-sZc8XjOxnsV3xeh3jKfxqzZRbdm2B45XnTPI-KPEpbHAOcWzXFFVBtgCBEsnhKK",
    },
    {
      title: "Tokyo Exploration",
      date: "Nov 5 - Nov 12, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAS5BCGR62pCd29_lgK9JHZCSReuUxhWC4bHVG5pP1yuPJZnKlJRrsGO_L_68gRVJt-JxuUz5oXuekEMdykEwjLwaPIY4vEZViJ7O3cdL0m84MWuNl_BVKyY6KNiyPHtnDzizRmt8kTApw3Lgr_QX1Hu56IAQyMiLgOM6cQAjVY6Sfn1jlNqXgQT9QVczTWYFwVosoT6-QWfXG4Rz7UICvmZMpsHR35kajLtaDoUKm9Ijx5M1rlR6xsi5VNT789Fapu-uFJQSt2x7Wk",
    },
    {
      title: "London Getaway",
      date: "Dec 1 - Dec 8, 2024",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBYOnlqUScbgmOfrqwUcz8w9fzbYw3N_ZiJFppr6-EzW-aifFHdn5hrjfIdeAg_j4ZvwmwhDHJuNhMc_DtDvMFiP4iBNENzx6Sw7EzuUFzSRmDsbvRDEqjUwuUqIpGNdWyQaXXQ0hE8-ad5HpDP8LYeuvRFxUYVioOdCxA8Xhw_JqyUTkmj8HBXkPX7SzDtkRpJWymXix_lsBP1wwOQnAwaUqjB6oni-wMLG4-PauKJ--a3nBdoBfMy55zJQKSMu1Fq8NkUxsDvU0V",
    },
    {
      title: "Rome Discovery",
      date: "Jan 10 - Jan 17, 2025",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1VdXaOpo9yvzNHI1896K1necjv57vxAjT8Pf7RqNX8MrvEsPNLCeW5WfM_zeYWCaD1_q7ikOdH53g_AuMY8qA9VO-u5nZfp8sHPGxfA15LGC28wXsM51mvdMTbDKMkuW2EY67fjmfSOfFMdaIWgA-Z7hynT6CyVNqC5bq9dGjh-MZHQcf_fs3HWH7tg1mfRk9rLOvW9Jg5FVSM9RuKQc2pprTUc-pOu3q1tCPpF2L_JjPnA61vDQJsb-yz-f4PTRS7tbU6NWkxq5r",
    },
    {
      title: "Barcelona Escape",
      date: "Feb 14 - Feb 21, 2025",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDP9OZ1AFdHXb5ijPmVqW85SbD8wfTijWa8Gp7x5Bx7KmyPtKg4GABXQBaDgOKcZvoDlsyz-AmAFFS9itjXzqFC8Lanpz-9lH3foptYMirXUaGHexYZyMFG3F-mqkxtmoyPKIELboGtyMVyzuwBLDBDOH64Mq0Rwj1D7bur7Yr2DZTHe9c4MQdWJ7lWIiFaYSWW81IytTwLmdCppebcvr3Mk3Im52_yQsCOAqsPqn-7UlgNCW5p9M3ka3H6GT-vWkJ-sMyU474MmUQh",
    },
    {
      title: "New York City Tour",
      date: "Mar 5 - Mar 12, 2025",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHFdubGJaJT1VBivUJTtUbivmT7cisOgdfMg3gtuvX8WbuFfxNqLMpHPy16gj_O4pw3ZMSnLGpEpYau5lsvLAOm95jQkpAUBnOQTvHkzKgR_2xfZq8fhMPfkStSqt3dAkLztxr8k3oC_CKjI6EnXGcG2hBdxgGyvv6navC5bzPtjhpdV5gmdROYMUitt-JyXUnrk_fryCFfilsPIMTJo1m73cyDqqpidOmqT_8OA8CZEQYmAYJigEL04IVrqfZVwBwpHhnPp_nu9Ow",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-[#1a1a1a] overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">

          {/* Section Title */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">Saved Trips</p>
              <p className="text-[#adadad] text-sm font-normal leading-normal">
                Access your saved travel plans and itineraries.
              </p>
            </div>
          </div>

          {/* Trips Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(188px,2fr))] gap-3 p-4">
            {trips.map((trip, idx) => (
              <div key={idx} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${trip.image})` }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">{trip.title}</p>
                  <p className="text-[#adadad] text-sm font-normal leading-normal">{trip.date}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
