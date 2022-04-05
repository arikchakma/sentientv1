import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

import cn from 'clsx';

import DownIcon from '../icons/DownIcon';

export default function WalletDropdownMeta() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, disconnect] = useAccount();

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    if (window) document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  });

  return (
    <div className="text-right">
      <Menu as="div" className="relative">
        <div className="grid justify-center pr-3">
          <Menu.Button className="inline-flex justify-center w-full self-center">
            <div
              className={cn(isOpen ? 'rotate-180' : '', 'transition-all')}
              onClick={() => setIsOpen(p => !p)}
            >
              <DownIcon />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-5 origin-top-right divide-y divide-white/10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-[#1A1C23] border border-white/10">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#612BF5] text-white font-semibold' : 'text-white'
                    } group flex rounded-md items-center w-full px-2 py-2 text-base`}
                  >
                    Account
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#612BF5] text-white font-semibold' : 'text-white'
                    } group flex rounded-md items-center w-full px-2 py-2 text-base`}
                    onClick={() => disconnect()}
                  >
                    Disconnect
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
