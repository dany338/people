export interface IUser {
  contactId: number;
  name: string;
  surnames: string;
  birthDate: string;
  gender: string;
  photo: string | null;
  phone: string;
  profesion: string;
  email: string;
};

class User implements IUser {
  contactId: number;
  name: string;
  surnames: string;
  birthDate: string;
  gender: string;
  photo: string | null;
  phone: string;
  profesion: string;
  email: string;

  constructor(user: IUser) {
    this.contactId = user.contactId;
    this.name = user.name;
    this.surnames = user.surnames;
    this.birthDate = user.birthDate;
    this.gender = user.gender;
    this.photo = user.photo;
    this.phone = user.phone;
    this.profesion = user.profesion;
    this.email = user.email;
  }
}

export interface IData {
  data: User[];
  loading: boolean;
}

export default User;