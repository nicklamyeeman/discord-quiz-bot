export type ProfileCard = {
  backgroundId: string;
  avatarId: string;
  rankId: string;
  badgesIds: string[];
};

export type User = {
  id: string;
  name: string;
  balance: number;
  profileCard: ProfileCard;
};
