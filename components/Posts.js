import React from 'react'
import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "raid",
        userImg: "https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9",
        img: "https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9",
        caption: "This is dope",
    
    },
    {
        id: "456",
        username: "chaima",
        userImg: "https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9",
        img: "https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9",
        caption: "👌🔥",
    
    }
] ;

export default function Posts() {
  return (
    <div>
        {posts.map(post => {
            return(
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            )
        })}
    </div>
  )
}
