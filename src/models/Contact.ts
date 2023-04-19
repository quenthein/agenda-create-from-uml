import { Coordonnees } from './Coordonnees';

export default class Contact {
    private nom: string;
    private coordonnees: Coordonnees[];

    constructor(nom: string, coordonnees: Coordonnees[]) {
        this.nom = nom;
        this.coordonnees = coordonnees;
    }

    public getNom(): string {
        return this.nom;
    }

    public getCoordonnees(): Coordonnees[] {
        return this.coordonnees;
    }
}
