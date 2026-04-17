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
    return (
      <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] bg-base-200">
        <span className="loading loading-spinner w-24 h-24 text-[#244d3f] border-8"></span>
      </div>
    )
  }

  return (
    <div className=" w-11/12 lg:w-8/12 mx-auto space-y-4 pb-[80px]">
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