import { useContext, useState } from 'react';
import styled from 'styled-components';
import {
  ModalContainer,
  ModalForm,
  ModalInfo,
  SubmitButton,
  Title,
  Name,
  CloseButton,
} from './ModalElements';
import ModalCloseIcon from '@/public/svgs/modalColseIcon.svg';
import CheckedIcon from '@/public/svgs/checkIcon.svg';
import { ModalContext } from '@/pages/folder';
import { ClickFolderButton } from '@/src/types/functionsType';
import { Folder } from '@/src/types/interfaces/fetchDatas';

function AddModal({ folders }: { folders: Folder[] }) {
  const [clickedFolderId, setClickedFolderId] = useState<number>();
  const { modalPurpose, handleModalClose } = useContext(ModalContext)!;

  const handleFolderButtonClick: ClickFolderButton = (e, folderId) => {
    e.preventDefault();
    setClickedFolderId(folderId);
  };
  return (
    <ModalContainer>
      <ModalForm>
        <CloseButton onClick={handleModalClose}>
          <ModalCloseIcon alt="close" />
        </CloseButton>
        <ModalInfo>
          <Title>폴더에 추가</Title>
          <Name>{modalPurpose}</Name>
        </ModalInfo>
        <FolderList>
          {folders.map((folder) => {
            const isClicked = folder.id === clickedFolderId;
            if (folder.id === 1) {
              return null;
            }
            return (
              <FolderButton
                key={folder.id}
                onClick={(e) => handleFolderButtonClick(e, folder.id)}
              >
                <FolderInfo>
                  <FolderName $isClicked={isClicked}>{folder.name}</FolderName>
                  <LinkNumber>{folder.link.count}개 링크</LinkNumber>
                </FolderInfo>
                {isClicked && <CheckedIcon alt="checked" />}
              </FolderButton>
            );
          })}
        </FolderList>
        <SubmitButton disabled={true}>추가하기</SubmitButton>
      </ModalForm>
    </ModalContainer>
  );
}

const FolderList = styled.div`
  width: 280px;
  height: 172px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  overflow-y: scroll;
`;
const FolderButton = styled.button`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  background: white;
  gap: 8px;
  &:hover {
    border-radius: 8px;
    background: var(--Linkbrary-bg, #f0f6ff);
  }
`;
const FolderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FolderName = styled.span<{ $isClicked: boolean }>`
  color: ${({ $isClicked }) =>
    $isClicked
      ? 'var(--Linkbrary-primary-color, #6D6AFE)'
      : 'var(--Linkbrary-gray100, #373740)'};

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const LinkNumber = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default AddModal;
