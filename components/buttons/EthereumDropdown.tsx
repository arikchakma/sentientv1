import { Fragment, useState } from 'react';
import Image from 'next/image';
import cn from 'clsx';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import DownIcon from '../icons/DownIcon';

type Props = {
  id: number;
  name: string;
  avatar: string;
};

const networks = [
  {
    id: 1,
    name: 'Ethereum',
    avatar: '/static/images/coins/ethereum.png'
  },
  {
    id: 2,
    name: 'Arik Chakma How are you',
    avatar: '/static/images/coins/ethereum.png'
  }
];

export default function EthereumDropdown() {
  const [selected, setSelected] = useState<Props>(networks[0]);
  const [open, setOpen] = useState(false);

  function changeDropdown(value: Props) {
    setOpen(!open);
    setSelected(value);
  }

  return (
    <Listbox value={selected} onChange={changeDropdown}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-40 cursor-default rounded-lg border border-[#25262D] px-2 py-[10px] text-left shadow-sm hover:border-indigo-500 hover:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="grid grid-cols-[24px_1fr_24px] items-center">
                <Image
                  src={selected.avatar}
                  width={24}
                  height={24}
                  alt=""
                  className="h-6 w-6 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
                <span className="pointer-events-none flex items-center pr-2">
                  <div
                    aria-hidden="true"
                    className={cn(open ? 'rotate-180' : '', 'self-center')}
                  >
                    <DownIcon />
                  </div>
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56  w-52 overflow-auto rounded-md border border-white/[0.06] bg-[#1A1C23] py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                {networks.map(person => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      cn(
                        active ? 'text-white' : 'text-white/70',
                        'relative cursor-default select-none p-1 px-2'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div
                          className={cn(
                            'grid grid-cols-[24px_1fr_20px] items-center  rounded p-1 py-2',
                            active ? 'bg-[#612BF5]' : ''
                          )}
                        >
                          <Image
                            src={person.avatar}
                            alt=""
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span
                            className={cn(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={cn(
                                active ? 'text-white' : 'text-indigo-600',
                                'flex items-center'
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
