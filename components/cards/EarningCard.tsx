import { useState } from 'react';
import Image from 'next/image';

import cn from 'clsx';

import DownIcon from '../icons/DownIcon';

function DropDown({ isOpen, setIsOpen }) {
  return (
    <button
      className="bg-[#1F1D2F] w-11 h-11 flex justify-center items-center rounded-xl"
      onClick={() => setIsOpen(p => !p)}
    >
      <span className={cn(isOpen ? 'rotate-180' : '')}>
        <DownIcon />
      </span>
    </button>
  );
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  specialProp?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`px-6 py-3 ${className} rounded-xl`} {...props}>
      <span className={`font-semibold`}>{children}</span>
    </button>
  );
};

export default function EarningCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-[minmax(45px,_140px),_1fr] bg-[#141321] border border-white/[0.06] p-5 rounded-2xl">
      <div>
        <div className="flex items-center">
          <Image
            src="/static/images/coins/ethereum.png"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="uppercase ml-2">Eth</span>
        </div>
      </div>

      <div className="grid gap-7 transition-all">
        <div className="grid grid-cols-5">
          <BaseDiv>
            <span className="text-sm text-white/40">PCOG Earned</span>
            <span className="text-base text-[#2ee662] font-bold">+1230</span>
            {isOpen && <span className="text-sm text-white/60">$1000.00</span>}
          </BaseDiv>
          <BaseDiv>
            <span className="text-sm text-white/40">Invested</span>
            <span className="text-base text-white font-bold">32.01 ETH</span>
            {isOpen && (
              <span className="text-sm text-white/60">$90,000.00</span>
            )}
          </BaseDiv>
          <BaseDiv>
            <span className="text-sm text-white/40">APY</span>
            <span className="text-base text-white font-bold">1.5%</span>
          </BaseDiv>
          <BaseDiv>
            <span className="text-sm text-white/40">Ends in</span>
            <span className="text-base text-[#FF0000] font-bold">
              15 : 24 : 60 : 01
            </span>
          </BaseDiv>
          <BaseDiv>
            <div className="self-end">
              <DropDown isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </BaseDiv>
        </div>
        {isOpen && (
          <>
            <div className="grid grid-cols-5">
              <BaseDiv>
                <span className="text-sm text-white/40">Last day profit</span>
                <span className="text-base text-[#2ee662] font-bold">
                  +5.00
                </span>
                <span className="text-sm text-white/60">$1.00</span>
              </BaseDiv>
              <BaseDiv>
                <span className="text-sm text-white/40">Strategy value</span>
                <span className="text-base text-white font-bold">500 ETH</span>
                <span className="text-sm text-white/60">$150,000.00</span>
              </BaseDiv>
              <BaseDiv>
                <span className="text-sm text-white/40">APY</span>
                <span className="text-base text-white font-bold">1.5%</span>
              </BaseDiv>
              <BaseDiv>
                <span className="text-sm text-white/40">Started</span>
                <span className="text-base text-white font-bold">
                  Feb 14, 2022
                </span>
              </BaseDiv>
            </div>
            <div className="grid grid-cols-5">
              <BaseDiv>
                <span className="text-sm text-white/40">Receipt</span>
                <span className="text-base text-white font-bold">
                  05.02 PCOG
                </span>
                <span className="text-sm text-white/60">#ID: 03012022</span>
              </BaseDiv>
              <BaseDiv className="col-span-2">
                <span className="text-sm text-white/40">Etherscan</span>
                <span className="text-base text-white font-bold">
                  0x594D1eF42A187011ed13436211985C0eB15D2540
                </span>
              </BaseDiv>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <BaseDiv className="col-span-2 rounded-2xl p-5  border border-white/[0.08]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/40 text-sm">Claimable</span>
                    <span className="uppercase text-base font-bold text-[#2ee662]">
                      1230.00 PCOG
                    </span>
                    <span className="text-white/60 text-xs">$30.00</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button className="bg-[#2EE662]/[0.08] text-[#2ee662]">
                      Stake
                    </Button>
                    <Button className="bg-[#6927FF] text-white">Claim</Button>
                  </div>
                </div>
              </BaseDiv>
              <BaseDiv className="col-span-2 rounded-2xl p-5  border border-white/[0.08]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/40 text-sm">
                      Available to withdraw
                    </span>
                    <span className="uppercase text-base font-bold text-white">
                      0.00
                    </span>
                    <span className="text-white/60 text-xs">$0.00</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button className="text-white border border-white/[0.08]">
                      Request
                    </Button>
                    <Button
                      className="bg-[#6927FF] text-white disabled:opacity-40"
                      disabled
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
              </BaseDiv>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type BaseDivProps = {
  children: React.ReactNode;
  className?: string;
};

const BaseDiv = ({ children, className, ...props }: BaseDivProps) => {
  return (
    <div className={`flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};
