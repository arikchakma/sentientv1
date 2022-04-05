import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import InvestCard from '../cards/InvestCard';

export default function InvestmentModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal
        // isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={'2xl'}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalBody className="bg-[#141321] rounded-3xl p-0 m-0">
            <InvestCard onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
