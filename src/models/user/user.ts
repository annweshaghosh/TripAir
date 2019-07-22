import { UserContact } from './user-contact';
import { UserMarkup } from './user-markup';

export class User {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    parentId: number;
    sex: string;
    type: string;
    userId: number;
    username: string;
    userContact: UserContact;
    userMarkUp: UserMarkup[];
}