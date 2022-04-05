function Button() {
return (
  <button className="px-5 py-2 bg-[#00E5E5] font-semibold text-[#141321] rounded-lg">
  Stake
</button>
)
}

export default function PrecogBalanceCard() {
  return (
    <div className="divide-y divide-white/[0.06] w-full rounded-2xl bg-[#141321] overflow-hidden">
      <div className="bg-[#2C273D]">
        <h2 className="font-semibold p-5">Available PCOG balance</h2>
      </div>
      {/* Precog Earn */}
      <div className="flex justify-between items-center p-5">
        <div className="grid">
          <span className="text-sm text-white/40">Profited balance (PCOG)</span>
          <span className="mt-1 font-bold">5,234.00</span>
          <span className="text-xs text-white/40">$300.00</span>
        </div>
        <div>
         <Button />
        </div>
      </div>
      {/* Wallet Balance */}
      <div className="flex justify-between items-center p-5">
        <div className="grid">
          <span className="text-sm text-white/40">Wallet balance (PCOG)</span>
          <span className="mt-1 font-bold">234.00</span>
          <span className="text-xs text-white/40">$50.00</span>
        </div>
        <div>
          <Button />
        </div>
      </div>

      <div className="p-5">
        <p className="text-center font-light text-xs text-white/40">Staking from wallet balance have to pay Gas fee</p>
      </div>
    </div>
  )
}
