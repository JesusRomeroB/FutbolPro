/* eslint-disable-next-line */

export interface UiProps {
  title: string;
  showTitle?: boolean;
}

export interface Pais{
  code: string;
  name: string;
  flag: string;
}

export interface Team{
  id: string;
  name: string;
  logo: string;
}

export interface Player{
  id: string;
  name: string;
  photo: string;
}

export interface Teams{
  team: {
    [key: string]: Team;
};
}

export interface TeamList{
  countryName: string;
}

export interface PlayerList{
  teamId: string;
}
