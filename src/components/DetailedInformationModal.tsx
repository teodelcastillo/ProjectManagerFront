import {  InfoOutlineIcon } from '@chakra-ui/icons'
import { useDisclosure,  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, IconButton } from '@chakra-ui/react'
import React from 'react'
import Appointment from '../models/Appointment'

import MarkAppointmentAsDone from './MarkAppointmentAsDone'

interface Props {
  child: Appointment 
  btnColor: string
}

const DetailedInformationModal = ({child, btnColor}:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  const btnRef = React.useRef(null)

  return (
    <>

    <IconButton  aria-label="More information" icon={<InfoOutlineIcon />} variant={'outline'} colorScheme={btnColor} size={'xs'} ref={btnRef} onClick={onOpen} />
        
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent minH={'450px'}>
          <ModalHeader>{child.title}<br />{child.date}{' | '}{child.time}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {child.description}<br />
            {child.projectName}

          </ModalBody>
          <ModalFooter>
            
            <MarkAppointmentAsDone buttonSize='md' appointment={child} colorScheme='green'/>
            <Button onClick={onClose} ml={3}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailedInformationModal