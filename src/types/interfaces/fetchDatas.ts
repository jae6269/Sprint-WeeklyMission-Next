interface User {
  id: number;
  name: string;
  email: string;
}

interface FolderPageUser extends User {
  created_at: string;
  image_source: string;
  auth_id: string;
}

export interface SharedPageUser extends User {
  profileImageSource: string;
}

export interface FolderPageUserType {
  data: FolderPageUser[];
}

export interface SharedPageFolderOwner {
  ownerImg: string;
  ownerName: string;
  folderName: string;
}

export interface CardDataType {
  id: number;
  url: string;
  imgUrl: string | null;
  title: string;
  description: string;
}

export interface SharedPageLink extends CardDataType {
  lastTimeString: string;
  uploadDate: string;
}

interface LinkCount {
  count: number;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: string;
  favorite: boolean;
  link: LinkCount;
  isClicked: boolean | null;
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string | null;
}
export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SharedPageFolder {
  folder: {
    id: number;
    name: string;
    owner: Owner;
    links: Link[];
  };
}
