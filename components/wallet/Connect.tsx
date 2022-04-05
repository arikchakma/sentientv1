import { useConnect, useAccount } from 'wagmi';
import { useToast } from '@chakra-ui/react';

import {
  shortenAddress,
  copyToCliboard,
  isAddress
} from '@/utils/walletAddress';

import CopyToClipboardIcon from '../icons/CopyToClipboardIcon';
import MetamaskIcon from '../icons/MetamaskIcon';
import WalletDropdown from '../dropdowns/WalletDropdownMeta';

export default function Connect() {
  // Metamask Accoung
  const [{ data, error }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount();

  // Shortend Wallet Address
  const walletAddress = shortenAddress(accountData?.address);

  // Success Toast
  const toast = useToast();

  if (!accountData && !isAddress(accountData?.address)) {
    return (
      <div>
        {data.connectors.map(connector => (
          <button
            // disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect(connector)}
            className="rounded-lg bg-[#612BF5] px-3 py-2 font-semibold text-white"
          >
            Connect
          </button>
        ))}

        {error && <div>{error?.message ?? 'Failed to connect'}</div>}
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-[10px] rounded-lg border border-[#25262D] bg-[#1A1C23] px-3 py-[6px] pr-0 sm:pr-3">
        <MetamaskIcon />
        <span className="text-sm font-semibold text-white/40">
          {walletAddress}
        </span>
        <div
          onClick={() => {
            copyToCliboard(accountData?.address);
            toast({
              title: `Copied to clipboard.`,
              status: 'success',
              isClosable: true,
              position: 'bottom-right'
            });
          }}
          className="cursor-pointer"
        >
          <CopyToClipboardIcon />
        </div>
        <WalletDropdown />
      </div>
    </>
  );
}
