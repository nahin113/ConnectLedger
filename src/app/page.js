import Banner from "@/components/home/Banner";
import SummaryCards from "@/components/home/SummaryCards";

export default function Home() {
  return (
    <div className="bg-base-300">
      <Banner></Banner>
      <SummaryCards></SummaryCards>
      <div className="py-10">
        <div className="divider w-8/12 mx-auto"></div>
      </div>
    </div>
  );
}
