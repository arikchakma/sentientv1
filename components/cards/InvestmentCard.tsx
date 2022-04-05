import Image from 'next/image';
import InvestButton from '../buttons/InvestButton';

export default function InvestmentCard() {
  return (
    // max-w-[380px]
    <div
      className="
    w-full rounded-2xl bg-[#141321] pt-4 pb-7"
    >
      {/* Title */}
      <div className="grid justify-center justify-items-center px-5 text-center">
        <div className="flex h-14 w-14 items-center justify-center self-center rounded-full border border-white/10">
          <Image
            src="/static/images/coins/ethereum.png"
            alt="Ethereum"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-semibold">Ethereum</h3>
          <p className="mt-1 text-sm text-white/40">Invest ETH and earn PCOG</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-5 border-t border-b border-white/5">
        <div className="px-5 pt-7 pb-4">
          <div className="flex justify-between">
            <p className="text-base text-white/40">Previous profit crycle</p>
            <span className="text-base font-bold text-[#2EE662]">15.5%</span>
          </div>

          <div className="mt-6 flex justify-between">
            <p className="text-base text-white/40">Pool holders</p>
            <span className="text-right">
              5,234
              <br />
              <span className="text-sm text-white/40">$5,000,476.00 </span>
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-between px-5 pt-7">
        <div>
          <h3>Ethereum (ETH)</h3>
          <span className="text-sm text-white/60">Available: 5.2356 ETH</span>
        </div>
        <InvestButton />
      </div>
    </div>
  );
}
