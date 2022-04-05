import NextLink from 'next/link';

import EthereumDropdown from '../buttons/EthereumDropdown';
import GasDropdownButton from '../buttons/GasDropdownButton';
import NotificationIcon from '../icons/NotificationIcon';
import Connect from '../wallet/Connect';
import Logo from '../icons/Logo';
import EthereumIcon from '../icons/EthereumIcon';
import GasIcon from '../icons/GasIcon';
import LogoMark from '../icons/LogoMark';
import MetamaskTopBar from '../buttons/MetamaskTopBar';

function RoundedIcons({ children }) {
  return <div className="border rounded-xl p-2 border-white/[0.08]">{children}</div>;
}

export default function Topbar() {
  return (
    <div className="sticky top-0 z-50 flex-grow border-b border-white/5 backdrop-blur-lg">
      <div className="sm:hidden">
        <div className="mx-auto flex max-w-7xl justify-between py-6 px-5">
          <div className="flex gap-5">
            <EthereumDropdown />
            <GasDropdownButton />
          </div>

          <div className="flex items-center gap-5">
            <NotificationIcon />
            {/* <MetamaskButton /> */}
            <Connect />
          </div>
        </div>
      </div>
      <div className="hidden mx-auto sm:flex max-w-7xl justify-between py-6 px-5">
        <NextLink href="/">
          <a>
            <LogoMark />
          </a>
        </NextLink>

        <div className="flex gap-2">
          <RoundedIcons>
            <EthereumIcon />
          </RoundedIcons>
          <RoundedIcons>
            <GasIcon />
          </RoundedIcons>
          <RoundedIcons>
            <NotificationIcon />
          </RoundedIcons>
          <MetamaskTopBar />
        </div>
      </div>
    </div>
  );
}
