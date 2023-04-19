import Agenda from './Agenda';

class User {
    private login: string;
    private motDePasse: string;
    private agendas: Agenda[];

    constructor(login: string, motDePasse: string, agendas: Agenda[]) {
        this.login = login;
        this.motDePasse = motDePasse;
        this.agendas = agendas;
    }

    public authentifier(login: string, motDePasse: string): boolean {
        return this.login === login && this.motDePasse === motDePasse;
    }

    public getAgendas(): Agenda[] {
        return this.agendas;
    }

    public ajouterAgenda(agenda: Agenda): void {
        this.agendas.push(agenda);
    }

    public supprimerAgenda(agenda: Agenda): boolean {
        const index = this.agendas.findIndex((a) => a === agenda);

        if (index >= 0) {
            this.agendas.splice(index, 1);
            return true;
        }

        return false;
    }
}

export default User;
