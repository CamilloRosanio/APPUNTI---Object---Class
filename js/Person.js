
/*
Questa si chiama CLASS e rappresenta il modello di un oggetto, o se vogliamo
il "progetto" per creare oggetti con certe caratteristiche a "stampino".

Generalmente ciascun MODELLO (CLASS) viene scritto su un foglio JS separato (MODULE).
Il foglio viene impiegato in altri script ed è replicabile.
*/

class Person {

    /* Queste sono le PROPERTIES dell'Object creato con questa Classe. 
    Proprio come i LITERAL OBJECTS queste saranno le PROPERTY richiamabili tramite il punto (VEDI CONSOLE LOG SOTTO)*/

    firstName;
    secondName;
    age;
    job;

    /* Questo è il CONSTRUCTOR che viene richiamato tramite il NEW, dove indico
    quali PARAMETRI assegnare all'OBJECT che voglio creare e in che ordine.
    Nel CONSTRUCTOR posso anche specificare la LOGICA o le condizioni e i vincoli in cui
    posso creare una INSTANCE*/

    constructor (firstName, secondName, age, job) {

        if (isNaN(age)) {
            throw new Error ('Per creare la PERSON la sua età deve essere un NUMBER');
        }
        
        // Devo usare il THIS perchè il parametro fa riferimento alla SPECIFICA INSTANCE
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
    }

    /* Questo è un METHOD della classe che posso richiamare.
    Devo sempre indicare il THIS perchè la funzione deve rendere il valore di
    quella SPECIFICA INSTANCE. */
    getFullName () {
        return this.fullName = `${this.firstName} ${this.secondName}`
    }
}


/* In questo modo tramite NEW creo un nuovo oggeto dalla mia CLASS dichiarandolo come variabile.
Si chiama INSTANCE, ovvero "esemplare" o "esempio" della CLASS PERSON.*/
const mario = new Person ('Mario', 'Rossi', 23, null);

/* Se lo stampo in console, vedrò l'OBJECT "mario" indicato come PERSON in quanto creato con quella classe.
Ma se stampo il TYPEOF vedo che sarà comunque un OBJECT.*/
console.log('CONSOLE LOG della PERSON mario:')
console.log(mario);
console.log(typeof mario);
console.log(mario.age);
console.log(mario.getFullName());





/* Questa è una nuova INSTANCE di PERSON */
const alessio = new Person ('alessio', 'Bianchi', 34, 'scrittore');
console.log('CONSOLE LOG della PERSON alessio:')
console.log(mario);





/* Ecco un esempio di nuova INSTANCE con ERROR */
console.log('CONSOLE LOG della PERSON giulio:')

// Provoco volontariamente un ERROR mettendo una STRING al posto di un NUMBER per il parametro AGE.
const giulio = new Person ('Giulio', 'Verdi', 'tre', null);

console.log(giulio);