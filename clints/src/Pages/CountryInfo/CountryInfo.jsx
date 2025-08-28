export default function Country(){
    return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#1a1a1a] @[480px]:rounded-lg min-h-[218px]"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCD3xJMj9mXR38NnWwkdMUHtCr9om8EEo1BwwCN6t2L5JG01wPglwd4wtP8DgXUpvJejXaoAUS9p5Am76Hhm_jMAg4t-WmPBQuFyXgR6igqwRhaZ4xmj0zgIxetFeErVcinQgO6BP3D5ck_Gj0Ama3F957K9Efk72BcQJKvkQ6AmCbcJQAkLg08rjOeU4Qd_jkPRC6gwxrGBMROW5UeGKWH3VW7egOPDLHTTctrJOoQ0-Nutkg9WrS9RYU7xQMUtf_xHP6wwPDEqmE");` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Country Name</p>
        </div>

        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
            <p className="text-[#adadad] text-sm font-normal leading-normal">Population</p>
            <p className="text-white text-sm font-normal leading-normal">100 million</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
            <p className="text-[#adadad] text-sm font-normal leading-normal">Currency</p>
            <p className="text-white text-sm font-normal leading-normal">USD ($)</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
            <p className="text-[#adadad] text-sm font-normal leading-normal">Official Language(s)</p>
            <p className="text-white text-sm font-normal leading-normal">English</p>
          </div>
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#4d4d4d] py-5">
            <p className="text-[#adadad] text-sm font-normal leading-normal">Time Zone(s)</p>
            <p className="text-white text-sm font-normal leading-normal">EST</p>
          </div>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Overview</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Country Name is a vibrant nation known for its rich history, diverse landscapes, and welcoming culture. From bustling cities to serene natural wonders, it offers a
          unique blend of experiences for every traveler.
        </p>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Visa Requirements</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Visa requirements vary depending on your nationality. Please check with the embassy or consulate of Country Name in your country for the most up-to-date information.
        </p>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recommended Destinations</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCekKXO-NrV6w9VIrzNWnn5F_S4vy18vcb8STuuu5sL1jojfhJBvqbCyrTG76YdSQnWiiB9CRqr93n4AHDF0BN2bfO0P-J3X1zmDPMtbGWZRdspZYBJRSWCBt1vx7sqZQiQjIEOWGiP5BxcPUv0ZMaYpFMsaVUuB67IomDF_IbcS997AcXWyRvvQ9mp0uuCAMH3J_tJM-Iq-4LTJ7vzyWYQzoKmmHZoCeydiTBfe75gDG9VPV7ylDiwqBjz6Vx2gwfWfB4sDYXM52M7");` }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">City A</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJ83oHTrEhK4cqTswsUiIrLXb1Votd-eXzThpCaYZk2oAnfdJYzKFQJRLl4AyDOE9gWnc4LCMaX5RZIbAwE9_0_xmV-DeJWSMd6jPkz-5CXtnvqyFOfeC9FKarxXgv0nma6ydgllxWqGBVbmuUrF42wtawE78-zcaRxB-FPcPG_OWsRBwoB7SBX0s6w-q0gxpdNWYjByE_ZXr71Lm2w6w4um8MKiICtJc3Itfa8UsOxD-JJlTx2-c0YjZWr1dhxnpJEDz6tRZiAAeX");` }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">City B</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAO_Tyf6qaCOa3gua8MCSpumI_nuGsl02vWL8lRwJytE3Wa0FvmCp5IB5n2UzFulu-DT8yMFSmVj5MLwvh5xwCJY6NuCgV7OzBKRrahxHZU6cja-_fT8kDxSByUPEmlidXn8q0FZf6qAAUuNbWheRVAtUJHMD6_ou7QVmFOprE0bHGr-Ekuj0dqOQFRyFlWPA5JdXunV0Ha5o_9zMz4qW8HgaMp2cDLDObLKPFgMYeb7dD5Tw6WHAyPZZ_tbyqS5ynfV6rmk467SYpf");` }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">City C</p>
          </div>
        </div>
      </div>
    </div>
  );
}