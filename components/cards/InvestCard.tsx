import EthereumDropdown from '../buttons/EthereumDropdown';
import Image from 'next/image';
import ModalCloseIcon from '../icons/ModalCloseIcon';

export default function InvestCard({onClose}: {onClose: () => void}) {
  return (
    <div className="py-6 px-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold font-xl">Ethereum strategy</h2>
        <button onClick={onClose}>
          <ModalCloseIcon />
        </button>
      </div>

      <hr className="border-white/[0.06] border-t my-5"/>
      
      {/* Network */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <span className="text-sm text-white/40">Network</span>
          <EthereumDropdown />
        </div>
        <div className="flex flex-col text-right">
          <span className="font-bold text-[#FF0000]">15 : 24 : 60 : 01</span>
          <span className="text-sm uppercase text-white/40">Pool Ending</span>
        </div>
      </div>
      {/* Pool ID */}
      <div>
        <div className="flex items-center gap-[10px] mt-5 rounded-xl bg-[#1F1D2F]/40 p-5">
          <Image
            src="/static/images/coins/ethereum.png"
            alt=""
            width={42}
            height={42}
            className="rounded-full"
          />
          <div>
            <h4 className="font-semibold">Pool ID</h4>
            <p className="text-sm font-light text-white/60">
              0x58a1256f071bc441d4bd0ee81a2e2c54253abcdc
            </p>
          </div>
        </div>
      </div>
      {/* Profit */}
      <div className="grid grid-cols-3 gap-7 rounded-xl bg-[#1F1D2F]/40 p-5 mt-[10px]">
        <div className="grid border-r border-white/[0.06]">
          <span className="font-bold text-[#2EE662]">31.5%</span>
          <span className="text-sm text-white/40">Previous profit crycle</span>
        </div>
        <div className="grid border-r border-white/[0.06]">
          <span className="font-bold">5,234</span>
          <span className="text-sm text-white/40">Pool holders</span>
        </div>
        <div className="grid">
          <span className="font-bold">$5,000,476.00</span>
          <span className="text-sm text-white/40">Pool value</span>
        </div>
      </div>
      {/* Invest Form */}
      <form className="rounded-xl bg-[#1F1D2F] p-5 mt-[10px]">
        {/* <div>
          <input type="text" />
        </div> */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/40">Est. daily profits</span>
          <div className="grid gap-1">
            <span className="text-base font-semibold text-white">
              0.00 PCOG
            </span>
            <span className="text-right text-sm text-white/40">$0.00 </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="text-sm text-white/40">Total est. profits</span>
          <div className="grid gap-1">
            <span className="text-base font-semibold text-white">
              0.00 PCOG
            </span>
            <span className="text-right text-sm text-white/40">$0.00 </span>
          </div>
        </div>

        <hr className="border-white/[0.06] border-t my-5"/>

        {/* submit */}
        <div className="flex items-center justify-between">
          <div>
            <h5>Ethereum (ETH)</h5>
            <span className="text-sm text-white/60">Available: 2.00 ETH</span>
          </div>
          <button className="bg-[#FF0000] px-[18px] py-2 rounded-md font-semibold">Enable</button>
        </div>
      </form>

      {/* Footer */}
      <div>
        <p className="text-white/60 text-sm mt-5">
          This strategy automatically invest {'<ETH>'} into the Angle Liquidity
          Pools , the strategy earns trading fees based on the pool trading
          volume, and it earns additional Angle token rewards from Angle
          Protocol. Performance fee: 15%, Withdrawal fee: 0%
        </p>
      </div>
    </div>
  );
}
