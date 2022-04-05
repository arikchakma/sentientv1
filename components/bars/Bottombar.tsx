import NextLink from 'next/link';

import StrategiesIcon from '../icons/StrategiesIcon';
import StakeIcon from '../icons/StakeIcon';
import TransactionsIcon from '../icons/TransactionsIcon';

function BottombarLink({ Icon, href }: { Icon: React.FC; href: string }) {
  return (
    <NextLink href={href}>
      <a>
        <Icon />
      </a>
    </NextLink>
  );
}

export default function Bottombar() {
  return (
    <div className="bottombar-animation fixed bottom-4 z-50 hidden py-5 sm:block">
      <div className="bottom-9 flex w-screen justify-center">
        <ul className="flex list-none gap-10 rounded-[32px] border border-white/5 bg-[#1F1D2F]/60 py-4 px-5 backdrop-blur-md">
          <li className="group justify-center sidebar-max:flex">
            <BottombarLink href="/" Icon={StrategiesIcon} />
          </li>
          <li className="group justify-center sidebar-max:flex">
            <BottombarLink href="/stake" Icon={StakeIcon} />
          </li>
          <li className="group justify-center sidebar-max:flex">
            <BottombarLink href="/transactions" Icon={TransactionsIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
}
