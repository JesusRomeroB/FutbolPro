/* eslint-disable-next-line */

export interface UiProps {
  title: string;
  showTitle?: boolean;
}

export interface Pais{
  id: string;
  name: string;
  image_path: string;
}

export interface Team{
  id: string;
  name: string;
  logo_path: string;
}

export interface TeamList{
  CountryId: string;
}
