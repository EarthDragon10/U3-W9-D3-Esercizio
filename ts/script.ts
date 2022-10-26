// Abstract class AgenziaDelleEntrate {
//     stipendioLordo
//     tasseInps
//     tasseIperf
//     codRed(?)

//     abstract getUtileTasse
//     abstract getTasseInps
//     abstract getTasseIperf
//     abstract getRedditoAnnuoNetto
// }
// class Inps extends AgenziaDelleEntrate {... }
// class Iperf extends AgenziaDelleEntrate {... }
// class CalcolaStipendioNetto extends AgenziaDelleEntrate {... }

// questo è l'irpef su stipendio lordo
//    fino a 15mila euro: aliquota 23 %
//    fra 15mila e 28mila euro: aliquota 25 %
//    fra 28mila e 50mila euro: aliquota 35 %
//    Oltre i 50mila euro: aliquota 43 %
//    L’INPS, con circolare n. 25 del 2022, ha comunicato 
//    i valori aggiornati per il 2022 dei minimali e massimali 
//    di contribuzione e delle aliquote contributive dovute
//    dai lavoratori iscritti alla gestione separata.
//    La disciplina riguarda sia i lavoratori autonomi, 
//    per i quali l’aliquota è prevista nella misura del 33%, 
//    sia i professionisti senza cassa, per i quali l’aliquota è fissata
//    nella misura del 25 %, sia i collaboratori.

abstract class AgenziaDelleEntrate {
    codRedd?: number;
    redditoAnnuoLordo: number = 0;
    tasseInps?: number;
    tasseirpef?: number;
    static redditoAnnuoNetto: number = 0;

    getRedditoAnnuoLordo(redditoLordo: number): void {
        this.redditoAnnuoLordo = redditoLordo;
    }
    abstract getUtileTasse(): void;
    abstract getTasseInps(): void;
    abstract getTasseIperf(): void;
    abstract getRedditoAnnuoNetto(): void;
}

class Inps extends AgenziaDelleEntrate {

    getUtileTasse(): void {

    }
    getTasseInps(): void {

    }

    getTasseIperf(): void {

    }

    getRedditoAnnuoNetto(): void {

    }
}

class Iperf extends AgenziaDelleEntrate {


    getUtileTasse(): void {

    }
    getTasseInps(): void {

    }

    getTasseIperf(): void {
        if ((this.redditoAnnuoLordo) <= 15000) {
            let calcDiff15mila: number = (this.redditoAnnuoLordo * 23) / 100;

            this.tasseirpef = calcDiff15mila;
        } else if (this.redditoAnnuoLordo > 15000 && this.redditoAnnuoLordo <= 28000) {
            let calcDiff15mila: number = (this.redditoAnnuoLordo * 25) / 100;

            this.tasseirpef = calcDiff15mila;
        } else if (this.redditoAnnuoLordo > 28000 && this.redditoAnnuoLordo <= 50000) {
            let calcDiff15mila: number = (this.redditoAnnuoLordo * 35) / 100;

            this.tasseirpef = calcDiff15mila;
        } else {
            let calcDiff15mila: number = (this.redditoAnnuoLordo * 43) / 100;

            this.tasseirpef = calcDiff15mila;
        }
    }

    getRedditoAnnuoNetto(): void {

    }
}

class CalcolaStipendioNetto extends AgenziaDelleEntrate {

    getUtileTasse(): void {

    }
    getTasseInps(): void {

    }

    getTasseIperf(): void {

    }

    getRedditoAnnuoNetto(): void {

    }
}

abstract class Lavoratore {
    aliquota: number = 0;
    diffQuantity?: number = 0;

    constructor(aliquota: number) {
        this.aliquota = aliquota;
    }

    calcAliquota(redditoAnnuoLordo: number) {
        this.diffQuantity = (redditoAnnuoLordo * this.aliquota) / 100;
        return this.diffQuantity;
    }
}

class LavoratoreAutonomo extends Lavoratore {

    constructor(aliquota: number) {
        super(aliquota)
    }

}

class ProfessionistiSenzaCassa extends Lavoratore {

    constructor(aliquota: number) {
        super(aliquota)
    }

}