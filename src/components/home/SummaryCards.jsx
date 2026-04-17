const SummaryCards = () => {
    return (
      <div className="pt-[40px] w-8/12 mx-auto">
        <div className="cards grid grid-cols-4 gap-[24px]">
          <div className="p-[32px] bg-base-100 rounded-[8px] shadow-lg text-center">
            <h4 className="text-[32px] font-semibold text-[#244d3f]">10</h4>
            <p className="text-[18px] text-[#64748b]">Total Friends</p>
          </div>
          <div className="p-[32px] bg-base-100 rounded-[8px] shadow-lg text-center">
            <h4 className="text-[32px] font-semibold text-[#244d3f]">3</h4>
            <p className="text-[18px] text-[#64748b]">On Track</p>
          </div>
          <div className="p-[32px] bg-base-100 rounded-[8px] shadow-lg text-center">
            <h4 className="text-[32px] font-semibold text-[#244d3f]">6</h4>
            <p className="text-[18px] text-[#64748b]">Need Attention</p>
          </div>
          <div className="p-[32px] bg-base-100 rounded-[8px] shadow-lg text-center">
            <h4 className="text-[32px] font-semibold text-[#244d3f]">12</h4>
            <p className="text-[18px] text-[#64748b]">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    );
};

export default SummaryCards;