import { useDisclosure } from '@chakra-ui/react';
import InformationIcon from '../icons/InformationIcon';
import InvestmentModal from '../modal/InvestmentModal';

export default function InvestButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <button className="flex rounded-xl bg-[#612BF5] py-3" onClick={onOpen}>
      <span className="px-4 text-base font-semibold">Invest</span>
      <span className="text-white opacity-40">|</span>
      <div className="px-4 pl-1">
        <InformationIcon />
      </div>
      <InvestmentModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </button>
  );
}
