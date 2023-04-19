import { Coordonnees } from "../models/Coordonnees";
import Contact from "../models/Contact";
import User from "../models/User";

class AgendaController {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    // méthode pour ajouter un contact à l'agenda
    ajouterContact(nom: string, coordonnees: Coordonnees[]) {
        const agenda = this.user.getAgendas()[0]; // get the first agenda of the user
        const contact = new Contact(nom, coordonnees);
        agenda.ajouterContact(contact); // call the ajouterContact method on the agenda instance
    }


    // méthode pour récupérer tous les contacts de l'agenda
    getContacts(): Contact[] {
        return this.user.getAgendas()[0].getContacts();
    }

    // méthode pour récupérer un contact par son nom
    getContactParNom(nom: string): Contact | undefined {
        return this.user.getAgendas()[0].getContactParNom(nom);
    }

    // méthode pour supprimer un contact par son nom
    supprimerContact(nom: string): boolean {
        return this.user.getAgendas()[0].supprimerContact(nom);
    }

    // méthode pour authentifier l'utilisateur
    authentifier(login: string, motDePasse: string): boolean {
        return this.user.authentifier(login, motDePasse);
    }
}

export { AgendaController };
