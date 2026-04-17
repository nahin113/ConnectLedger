import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const setStatus = () => {
    if (friend.status == "Overdue") return "bg-[#ef4444] ";
    else if (friend.status == "On-Track") return "bg-[#244d3f]";
    else return "bg-[#efad44]";
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="p-[24px] text-center bg-base-100 space-y-[12px] rounded-[8px]">
        <div className="flex justify-center items-center">
          <Image
            className="rounded-full"
            src={friend.picture}
            width={80}
            height={80}
            alt={friend.name}
          />
        </div>
        <div className="space-y-[8px]">
          <h1 className="text-[#1f2937] text-[20px] font-semibold">
            {friend.name}
          </h1>
          <p className="text-[12px] text-[#64748b]">
            {friend.days_since_contact}d ago
          </p>
          <p className="flex justify-center items-center gap-2">
            {friend.tags.map((tag, idx) => (
              <span
                key={idx}
                className="py-[6px] px-[8px] bg-[#cbfadb] text-[#244d3f] rounded-full font-medium text-[12px]"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </p>
          <p>
            <span
              className={`py-[6px] px-[8px] text-white rounded-full font-medium text-[12px] ${setStatus()}`}
            >
              {friend.status}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
