import Image from "next/image";
import StatsCards from "./components/StatsCards";

export default function Home() {
  return (
<div className="bg-background min-h-screen flex flex-col items-center justify-center p-8">
 <StatsCards/>
</div>

  );
};
