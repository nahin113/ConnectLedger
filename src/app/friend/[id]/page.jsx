"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { PiVideoCameraBold } from "react-icons/pi";
import { PiChatTextBold } from "react-icons/pi";
import { useTimeline } from "@/lib/timelineStore";
import Image from "next/image";



const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};


const FriendDetails = () => {
  const { id } = useParams();
  const { addInteraction } = useTimeline(); 

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  
if (!friend) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] bg-base-200">
      <span className="loading loading-spinner w-24 h-24 text-[#244d3f] border-8"></span>
    </div>
  );
}

    const setStatus = () => {
      if (friend.status == "Overdue") return "bg-[#ef4444] ";
      else if (friend.status == "On-Track") return "bg-[#244d3f]";
      else return "bg-[#efad44]";
    };

   

  return (
    <div className="bg-base-300">
      <div className="lg:w-8/12 mx-auto">
        <div className="py-20 lg:grid lg:grid-cols-3 gap-6">
          <div className="text-center grid grid-rows-1 lg:grid-rows-3 gap-4 w-full">
            <div className="p-6 bg-base-100 row-span-2 flex justify-center items-center w-full">
              <div className="w-full">
                <div className="flex justify-center items-center pb-3">
                  <Image
                    className="rounded-full"
                    src={friend.picture}
                    width={80}
                    height={80}
                    alt={friend.name}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#1f2937] text-[20px] font-semibold">
                    {friend.name}
                  </h1>
                  <p>
                    <span
                      className={`py-1.5 px-2 text-white rounded-full font-medium text-[12px] ${setStatus()}`}
                    >
                      {friend.status}
                    </span>
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    {friend.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="py-1.5 px-2 bg-[#cbfadb] text-[#244d3f] rounded-full font-medium text-[12px]"
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </p>
                  <p className="text-[#64748b] font-semibold italic">
                    "{friend.bio}"
                  </p>
                  <p className="text-[#64748b]">{friend.email}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-rows-3 gap-2">
              <button className="btn bg-base-100 hover:bg-base-100 rounded-sm p-4 flex justify-center items-center text-[#1f2937] gap-2 font-semibold w-full h-auto min-h-0">
                <span>
                  <RiNotificationSnoozeLine size={18} />
                </span>
                <span>Snooze 2 weeks</span>
              </button>
              <button className="btn bg-base-100 hover:bg-base-100 rounded-sm p-4 flex justify-center items-center text-[#1f2937] gap-2 font-semibold w-full h-auto min-h-0">
                <span>
                  <FiArchive size={18} />
                </span>
                <span>Archive</span>
              </button>
              <button className="btn bg-base-100 hover:bg-base-100 rounded-sm p-4 flex justify-center items-center text-[#ef4444] gap-2 font-semibold w-full h-auto min-h-0">
                <span>
                  <RiDeleteBinLine size={18} />
                </span>
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-rows-3 gap-6 col-span-2 pt-4 lg:pt-0">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="space-y-2 py-8 bg-base-100 px-4 rounded-lg flex justify-center items-center flex-col">
                <h1 className="text-[30px] font-semibold text-[#244d3f]">
                  {friend.days_since_contact}
                </h1>
                <p className="text-[18px] text-[#64748b]">Days Since Contact</p>
              </div>
              <div className="space-y-2 py-8 bg-base-100 px-4 rounded-lg flex justify-center items-center flex-col">
                <h1 className="text-[30px] font-semibold text-[#244d3f]">
                  {friend.goal}
                </h1>
                <p className="text-[18px] text-[#64748b]">Goal (Days)</p>
              </div>
              <div className="space-y-2 py-8 bg-base-100 px-4 rounded-lg flex justify-center items-center flex-col">
                <h1 className="text-[30px] font-semibold text-[#244d3f]">
                  {formatDate(friend.next_due_date)}
                </h1>
                <p className="text-[18px] text-[#64748b]">Next Due</p>
              </div>
            </div>
            <div className="p-6 bg-base-100 flex items-center rounded-lg">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-[#244d3f] text-[20px]">
                    Relationship Goal
                  </h4>
                  <button className="btn text-[#1f2937]">Edit</button>
                </div>
                <div>
                  <p className="text-[#64748b] text-[18px]">
                    <span className="mr-2">Connect every</span>
                    <span className="font-bold text-[#1f2937]">30 days</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4 bg-base-100 rounded-lg">
              <h4 className="font-semibold text-[#244d3f] text-[20px]">
                Quick Check-In
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => addInteraction("Call", friend.name)}
                  className="btn flex flex-col items-center justify-center w-full h-auto p-4 space-y-2 bg-base-300 text-[#1f2937] text-lg rounded-lg"
                >
                  <FiPhoneCall size={30} />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => addInteraction("Text", friend.name)}
                  className="btn flex flex-col items-center justify-center w-full h-auto p-4 space-y-2 bg-base-300 text-[#1f2937] text-lg rounded-lg"
                >
                  <PiChatTextBold size={30} />
                  Text
                </button>
                <button
                  onClick={() => addInteraction("Video", friend.name)}
                  className="btn flex flex-col items-center justify-center w-full h-auto p-4 space-y-2 bg-base-300 text-[#1f2937] text-lg rounded-lg"
                >
                  <PiVideoCameraBold size={30} />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
