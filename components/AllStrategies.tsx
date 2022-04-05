import InvestmentCard from './cards/InvestmentCard';

export default function AllStrategies() {
  return (
    <div className="mt-11 grid grid-cols-3 justify-between gap-8 md:flex md:flex-col lg:grid-cols-2 sm:mb-20">
      <InvestmentCard />
      <InvestmentCard />
      <InvestmentCard />
      <InvestmentCard />
    </div>
  );
}
