import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'


function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      
        const suggestions = [...Array(5)].map((_, i) => (
            {
                name: faker.name.findName(),
                username: faker.internet.userName(),
                phone: faker.phone.number(),
                website: faker.internet.domainName(),
                email: faker.internet.email(),
                avatar: faker.internet.avatar(),
                address: faker.address.streetAddress(),
                id: i,
            }
        ))
        setSuggestions(suggestions);
    }, [])
    

  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>

        {
            suggestions.map(profile => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar}/>
                    <div>
                        <h2 className="font-semibold text-sm">{profile.username}</h2>
                        <h3 className="text-xs text-gray-400">Works at {profile.website}</h3>
                    </div>
                    <button className="text-blue-400 text-xs font-bold">Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions