import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    
      const suggestions = [...Array(20)].map((_, i) => ({
        name: faker.name.findName(),
        username: faker.internet.userName(),
        phone: faker.phone.number(),
        website: faker.internet.domainName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        address: faker.address.streetAddress(),
        id: i,
      })
    );
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 
    bg-white mt-8 border-gray-200 border
     rounded-sm overflow-x-scroll  scrollbar-thin scrollbar-thumb-black scroll">
      {suggestions.map((profile) => {
        return(
            <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
           />
        )
      })}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
};

export default Stories;
