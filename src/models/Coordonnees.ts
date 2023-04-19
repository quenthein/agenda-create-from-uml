export abstract class Coordonnees {
    protected value: string;

    constructor(value: string) {
        this.value = value;
    }

    public abstract validerFormat(): boolean;

    public getValue(): string {
        return this.value;
    }
}

export class CoordonneePostale extends Coordonnees {
    public validerFormat(): boolean {
        // Vérifier que la valeur respecte le format d'une adresse postale en France
        const regex = /^[0-9]{1,3}( [a-zA-Z\u00C0-\u017F]+)+$/;
        return regex.test(this.value);
    }
}

export class CoordonneeTelephonique extends Coordonnees {
    public validerFormat(): boolean {
        // Vérifier que la valeur respecte le format d'un numéro de téléphone en France
        const regex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
        return regex.test(this.value);
    }
}

export class CoordonneeElectronique extends Coordonnees {
    public validerFormat(): boolean {
        // Vérifier que la valeur respecte le format d'une adresse email ou d'un site web
        const regex = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)|((http|https):\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/;
        return regex.test(this.value);
    }
}
