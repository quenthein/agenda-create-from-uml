import Contact from './Contact';
import User from './User';

class Agenda {
    private owner: User;
    private contacts: Contact[];

    constructor(owner: User) {
        this.owner = owner;
        this.contacts = [];
    }

    public ajouterContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    public getContacts(): Contact[] {
        return this.contacts;
    }

    public getContactParNom(nom: string): Contact | undefined {
        return this.contacts.find((contact) => contact.getNom() === nom);
    }

    public supprimerContact(nom: string): boolean {
        const index = this.contacts.findIndex((contact) => contact.getNom() === nom);

        if (index >= 0) {
            this.contacts.splice(index, 1);
            return true;
        }

        return false;
    }

    public getOwner(): User {
        return this.owner;
    }
}

export default Agenda;
