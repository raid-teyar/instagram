import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

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
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 
    bg-white mt-8 border-gray-200 border
     rounded-sm overflow-x-scroll  scrollbar-thin scrollbar-thumb-black scroll"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
}

export default Stories;
