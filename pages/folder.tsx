import { useState, createContext, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import FolderList from '@/src/components/FolderList';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import LinkAddBar from '@/src/components/LinkAddBar';
import EditModal from '@/src/components/modals/EditModal';
import DeleteModal from '@/src/components/modals/DeleteModal';
import ShareModal from '@/src/components/modals/ShareModal';
import AddModal from '@/src/components/modals/AddModal';
import {
  ADD_TYPE,
  DELETE_TYPE,
  EDIT_TYPE,
  SHARE_TYPE,
} from '@/src/constants/modalConstants';
import {
  USERS_FOLDERS_URL,
  USERS_LINKS_URL,
  USER_URL,
} from '@/src/constants/urls';
import { ModalClose, ModalOpen } from '@/src/types/functionsType';
import { Folder, FolderPageUserType } from '@/src/types/interfaces/fetchDatas';
import { ENTIRE_FOLDER } from '@/src/constants/fetchConstants';
import { formatDate, getLastTime } from '@/src/utils/timeCalculater';

export const ModalContext = createContext<{
  modalType: string;
  modalPurpose: any;
  handleModalOpen: ModalOpen;
  handleModalClose: ModalClose;
} | null>(null);

interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

interface LinksResult {
  data: Link[];
}

export interface FolderPageLink {
  id: number;
  url: string;
  imgUrl: string | null;
  title: string;
  description: string | null;
  lastTimeString: string;
  uploadDate: string;
}

export async function getServerSideProps() {
  const userResponse = await fetch(USER_URL);
  const foldersResponse = await fetch(USERS_FOLDERS_URL);
  const linksResponse = await fetch(USERS_LINKS_URL);
  const user: FolderPageUserType = await userResponse.json();
  const foldersResult = await foldersResponse.json();
  const linksResult: LinksResult = await linksResponse.json();
  const folders: Folder[] = [ENTIRE_FOLDER, ...foldersResult.data];
  const links: FolderPageLink[] = linksResult.data.map((link) => ({
    id: link.id,
    url: link.url,
    imgUrl: link.image_source,
    title: link.title,
    description: link.description,
    lastTimeString: getLastTime(link.created_at),
    uploadDate: formatDate(link.created_at),
  }));
  return { props: { user, folders, links } };
}

function FolderPage({
  user,
  folders,
  links,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //modal states
  const [modalType, setModalType] = useState('');
  const [modalPurpose, setModalPurpose] = useState();
  const [linkAddBarRef, isLinkAddBarInView] = useInView();
  const [footerRef, isFooterInView] = useInView();
  const fixedLinkSearchBarRef = useRef<any>();

  //modal open
  const handleModalOpen: ModalOpen = (type, purpose) => {
    setModalPurpose(purpose);
    setModalType(type);
  };

  //modal close
  const handleModalClose: ModalClose = () => {
    setModalType('');
  };

  useEffect(() => {
    if (!isLinkAddBarInView && !isFooterInView) {
      fixedLinkSearchBarRef.current.style.setProperty('display', 'block');
      fixedLinkSearchBarRef.current.style.setProperty('position', 'fixed');
      fixedLinkSearchBarRef.current.style.setProperty('bottom', '0');
      fixedLinkSearchBarRef.current.style.setProperty('left', '0');
      fixedLinkSearchBarRef.current.style.setProperty('width', '100%');
      fixedLinkSearchBarRef.current.style.setProperty('z-index', '200');
    } else {
      fixedLinkSearchBarRef.current.style.setProperty('display', 'none');
    }
  }, [isLinkAddBarInView, isFooterInView]);

  //Folder Page
  return (
    <ModalContext.Provider
      value={{
        modalType,
        modalPurpose,
        handleModalOpen,
        handleModalClose,
      }}
    >
      {modalType === ADD_TYPE && <AddModal folders={folders} />}
      {modalType === DELETE_TYPE && <DeleteModal />}
      {modalType === EDIT_TYPE && <EditModal />}
      {modalType === SHARE_TYPE && <ShareModal />}

      <Header user={user} />
      <div ref={linkAddBarRef}>
        <LinkAddBar />
      </div>
      <div ref={fixedLinkSearchBarRef}>
        <LinkAddBar />
      </div>

      <FolderList folders={folders} links={links} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </ModalContext.Provider>
  );
}
export default FolderPage;
