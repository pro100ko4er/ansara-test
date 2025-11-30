'use client'

import Modal, {Props as ModalProps} from 'react-modal';

export interface BaseModalProps extends ModalProps {

}

export default function BaseModal(props: BaseModalProps) {
    const {style, children} = props
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

    return (
        <Modal style={customStyles || style} {...props}>
            {children}
        </Modal>
    )
}