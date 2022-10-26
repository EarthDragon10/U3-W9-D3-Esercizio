"use strict";
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
class AgenziaDelleEntrate {
    constructor() {
        this.redditoAnnuoLordo = 0;
    }
    getRedditoAnnuoLordo(redditoLordo) {
        this.redditoAnnuoLordo = redditoLordo;
    }
}
class Inps extends AgenziaDelleEntrate {
    getUtileTasse() {
    }
    getTasseInps() {
    }
    getTasseIperf() {
    }
    getRedditoAnnuoNetto() {
    }
}
class Iperf extends AgenziaDelleEntrate {
    getUtileTasse() {
    }
    getTasseInps() {
    }
    getTasseIperf() {
        if ((this.redditoAnnuoLordo) <= 15000) {
            let calcDiff15mila = (this.redditoAnnuoLordo * 23) / 100;
            this.tasseirpef = calcDiff15mila;
        }
    }
    getRedditoAnnuoNetto() {
    }
}
class CalcolaStipendioNetto extends AgenziaDelleEntrate {
    getUtileTasse() {
    }
    getTasseInps() {
    }
    getTasseIperf() {
    }
    getRedditoAnnuoNetto() {
    }
}
class Lavoratore {
    constructor(aliquota) {
        this.aliquota = 0;
        this.diffQuantity = 0;
        this.aliquota = aliquota;
    }
    calcAliquota(redditoAnnuoLordo) {
        this.diffQuantity = (redditoAnnuoLordo * this.aliquota) / 100;
        return this.diffQuantity;
    }
}
class LavoratoreAutonomo extends Lavoratore {
    constructor(aliquota) {
        super(aliquota);
    }
}
class ProfessionistiSenzaCassa extends Lavoratore {
    constructor(aliquota) {
        super(aliquota);
    }
}
