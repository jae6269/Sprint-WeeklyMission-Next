import {
  ModalContainer,
  ModalForm,
  CloseButton,
  ModalInfo,
  Title,
  Name,
} from './ModalElements';
import ModalCloseIcon from '@/public/svgs/modalColseIcon.svg';
import { ModalContext } from '@/pages/folder';
import { useContext } from 'react';
import styled from 'styled-components';
import { SHARE_BUTTONS } from '../../constants/modalConstants';
import {
  copyURLToClipboard,
  shareLinkToFacebook,
  shareLinkToKakaoTalk,
} from '../../utils/shareLinkFunctions';
import { ClickFolderButton } from '../../types/functionsType';

function ShareModal() {
  const { modalPurpose, handleModalClose } = useContext(ModalContext)!;

  const name = modalPurpose.folderName;
  const folderId = modalPurpose.id;

  const handleClick: ClickFolderButton = (e, buttonId) => {
    e.preventDefault();
    switch (buttonId) {
      case 1:
        shareLinkToKakaoTalk(folderId);
        break;
      case 2:
        shareLinkToFacebook(folderId);
        break;
      case 3:
        copyURLToClipboard(folderId);
        break;
      default:
        break;
    }
  };

  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton onClick={handleModalClose}>
          <ModalCloseIcon alt="close" />
        </CloseButton>
        <ModalInfo>
          <Title>폴더 공유</Title>
          <Name>{name}</Name>
        </ModalInfo>
        <ShareSection>
          {SHARE_BUTTONS.map((button) => (
            <Button key={button.id} onClick={(e) => handleClick(e, button.id)}>
              <ButtonIcon
                src={button.img}
                alt={button.name}
                background={button.background}
              ></ButtonIcon>
              <ButtonName>{button.name}</ButtonName>
            </Button>
          ))}
        </ShareSection>
      </ModalForm>
    </ModalContainer>
  );
}

const ShareSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ButtonIcon = styled.img<{ background: string }>`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 37.333px;
  background: ${({ background }) => background};
`;

const ButtonName = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

export default ShareModal;
