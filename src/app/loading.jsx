export default function Loading() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh] bg-base-200">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner w-24 h-24 text-[#244d3f] border-8"></span>
      </div>
    </div>
  );
}
