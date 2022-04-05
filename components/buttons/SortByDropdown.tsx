import { Fragment, useState } from 'react';
import cn from 'clsx';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import DownIcon from '../icons/DownIcon';

type Props = {
  id: number;
  name: string;
};

const people = [
  {
    id: 1,
    name: 'Sort By Name'
  },
  {
    id: 2,
    name: 'Sort By APY'
  }
];

export default function SortByDropdown() {
  const [selected, setSelected] = useState<Props>(people[0]);
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
            <Listbox.Button className="relative w-40 border border-[#25262D] rounded-lg shadow-sm px-2 py-[10px] text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 hover:ring-indigo-500 hover:border-indigo-500 sm:text-sm ">
              <span className="grid grid-cols-[1fr_24px] items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
                <span className="flex items-center pr-2 pointer-events-none">
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
              <Listbox.Options className="absolute z-10 mt-1 w-52 bg-[#1A1C23]  shadow-lg max-h-56 rounded-md py-1 text-base border border-white/[0.06] overflow-auto focus:outline-none sm:text-sm right-0">
                {people.map(person => (
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
                      <div className={cn("grid grid-cols-[1fr_20px] items-center p-1 py-2 rounded", active ? "bg-[#612BF5]": "")}>
                        <span
                          className={cn(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
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
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
