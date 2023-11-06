import {  InfoOutlineIcon } from '@chakra-ui/icons'
import { useDisclosure,  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, IconButton } from '@chakra-ui/react'
import React from 'react'
import Appointment from '../models/Appointment'
import Client from '../models/Client'
import Project from '../models/Projects'

interface Props {
  child: Appointment | Client | Project
}

const DetailedInformationModal = ({child}:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  const btnRef = React.useRef(null)

  return (
    <>

    <IconButton  aria-label="More information" icon={<InfoOutlineIcon />} variant={'outline'} size={'sm'} ref={btnRef} onClick={onOpen} />
        
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
            
            <Button onClick={onClose}>Hecho</Button>
            <Button onClick={onClose} ml={3}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailedInformationModal