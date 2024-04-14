import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import Profile from '@/src/components/Profile';
import CardList from '@/src/components/CardList';
import { SAMPLE_USER_URL, SAMPLE_FOLDER_URL } from '@/src/constants/urls';
import {
  SharedPageFolder,
  SharedPageFolderOwner,
  SharedPageLink,
  SharedPageUser,
} from '@/src/types/interfaces/fetchDatas';
import { formatDate, getLastTime } from '@/src/utils/timeCalculater';

export const getServerSideProps = (async (context) => {
  const { folderId } = context.query;
  const userResponse = await fetch(SAMPLE_USER_URL);
  const folderResponse = await fetch(SAMPLE_FOLDER_URL);
  const user: SharedPageUser = await userResponse.json();
  const folderData: SharedPageFolder = await folderResponse.json();
  const folder = folderData.folder;
  const owner: SharedPageFolderOwner = {
    ownerImg: folder.owner.profileImageSource,
    ownerName: folder.owner.name,
    folderName: folder.name,
  };
  const links: SharedPageLink[] = folder.links.map((link) => ({
    id: link.id,
    url: link.url,
    imgUrl: link.imageSource || null,
    title: link.title,
    description: link.description,
    lastTimeString: getLastTime(link.createdAt),
    uploadDate: formatDate(link.createdAt),
  }));
  return { props: { user, owner, links } };
}) satisfies GetServerSideProps<{
  user: SharedPageUser;
  owner: SharedPageFolderOwner;
  links: SharedPageLink[];
}>;

export default function Shared({
  user,
  owner,
  links,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header user={user} />
      <Profile owner={owner} />
      <CardList links={links} />
      <Footer />
    </>
  );
}
