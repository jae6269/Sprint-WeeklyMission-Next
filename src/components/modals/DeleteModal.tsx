import { useContext } from 'react';
import {
  ModalContainer,
  ModalForm,
  CloseButton,
  DeleteButton,
  ModalInfo,
  Title,
  Name,
} from './ModalElements';
import modalCloseIcon from '@/public/svgs/modalColseIcon.svg';
import { ModalContext } from '@/pages/folder';

function DeleteModal() {
  const { modalPurpose, handleModalClose } = useContext(ModalContext)!;

  const title = modalPurpose.purpose;
  const name = modalPurpose.name;

  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton onClick={handleModalClose}>
          <img src={modalCloseIcon} alt="closeButton" />
        </CloseButton>
        <ModalInfo>
          <Title>{title}</Title>
          <Name>{name}</Name>
        </ModalInfo>
        <DeleteButton disabled={true}>삭제하기</DeleteButton>
      </ModalForm>
    </ModalContainer>
  );
}

export default DeleteModal;
