"use client";
import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

const FriendsGrid = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="w-8/12 mx-auto space-y-4 pb-[80px]">
      <h1 className="text-[#1f2937] text-[24px] font-semibold">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsGrid;