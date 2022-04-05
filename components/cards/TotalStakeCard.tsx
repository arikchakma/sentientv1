export default function TotalStakeCard() {
  return (
    <div className="grid h-full items-center">
      <div className="h-full border-b border-white/[0.06]">
        <div className="flex h-full items-center justify-between px-10">
          <div className="flex flex-col">
            <span className="text-sm text-white/40">Total staked</span>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-xl">1230.00 PCOG</p>
              <span className="font-medium text-[10px] text-white/40">$30.00</span>
            </div>
          </div>
          {/* Button */}
          <div>
            <button className="rounded-xl border border-white/[0.08] px-6 py-3 font-semibold">
              Unstake
            </button>
          </div>
        </div>
      </div>

      {/* Restake */}
      <div className="flex h-full items-start justify-between px-10 pt-5">
        <div>
          <div className="flex gap-[10px]">
            <div className="h-[14px] w-[14px] rounded-[3px] bg-[#2EE662]" />
            <div>
              <span className="text-sm text-white/40">
                Staked reward (PCOG)
              </span>
              <p className="text-base font-bold">
                30.00{' '}
                <span className="text-xs font-normal text-white/40">$5.00</span>
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-5">
            <div className="h-[14px] w-[14px] rounded-[3px] bg-[#2EE662]" />
            <div>
              <span className="text-sm text-white/40">Staked reward (BTC)</span>
              <p className="text-base font-bold">
                0.003{' '}
                <span className="text-xs font-normal text-white/40">$5.00</span>
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div>
          <button className="rounded-xl border border-white/[0.08] px-6 py-3 font-semibold">
            Restake
          </button>
        </div>
      </div>
    </div>
  );
}
