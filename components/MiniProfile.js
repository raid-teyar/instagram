import React from 'react'

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="w-16 rounded-full border p-[2px]" src="https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9"/>
        <div className="flex-1 mx-4">
            <h2 className="font-bold">raid</h2>
            <h3 className="text-sm text-gray-400">Welcom tp Instagram</h3>
        </div>  

        <button className="text-blue-400 text-sm
        font-semibold ">Sign out</button>    
    </div>
  )
}

export default MiniProfile