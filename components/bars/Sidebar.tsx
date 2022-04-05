import NextLink from 'next/link';

import SidebarLink from './SidebarLink';

import Logo from '../icons/Logo';
import StrategiesIcon from '../icons/StrategiesIcon';
import StakeIcon from '../icons/StakeIcon';
import TransactionsIcon from '../icons/TransactionsIcon';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 flex h-screen bg-[#141321] sm:hidden">
      <div className="flex w-60 flex-col px-4 py-10 sidebar-max:w-[72px]">
        <div className="flex sidebar-max:justify-center">
          <NextLink href="/">
            <a>
              <Logo />
            </a>
          </NextLink>
        </div>
        <nav className="mt-14">
          <ul className="flex list-none flex-col gap-7 sidebar-max:gap-4">
            <li className="group justify-center sidebar-max:flex">
              <SidebarLink href="/" Icon={StrategiesIcon}>
                Strategies
              </SidebarLink>
            </li>
            <li className="group justify-center sidebar-max:flex">
              <SidebarLink href="/stake" Icon={StakeIcon}>
                Stake
              </SidebarLink>
            </li>
            <li className="group justify-center sidebar-max:flex">
              <SidebarLink href="/transactions" Icon={TransactionsIcon}>
                Transactions
              </SidebarLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
