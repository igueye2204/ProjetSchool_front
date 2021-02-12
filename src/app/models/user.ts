import { Profil } from "./profil";

export class User{
  id:number;
  username: string;
  prenom: string;
  nom: string;
  password: string;
  email: string;
  profil: Profil;
  avatar: Blob;
}
