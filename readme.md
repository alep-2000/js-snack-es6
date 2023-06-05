PROBLEMA:
SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']  
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

SOLUZIONE:
1 - Generare array degli invitati;
2 - Creare un altro array con .map in cui aggiungere per ogni ospite 1 oggetto con tre valori: nomi del tavolo, nome dell'ospite e posto occupato
3 - Stampare in console il nuovo array;

PROBLEMA:
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
```
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84

SOLUZIONE:
1 - Creare un array di oggetti con 3 valori id, nome e voto d'esame;
2 - Creare un secondo array con .map in cui stampiamo i nomi in maiuscolo con .uppercase
3 - Creare un terzo array .filter in cui inseriamo gli studenti con voto superiore a 70;
    3.1 - Utilizzare un controllo if:
        3.1.1 - ? SE lo studente ha un voto più alto di 70 inserisci nell'array;
        3.1.2 - : ALTRIMENTI non inserirlo;
4 - Creare un quarto array con .filter in cui inseriamo gli studenti con voto più alto di 70 e id più alto di 120;
    4.1 - Utilizzare un controllo if:
        4.1.1 - ? SE lo studente ha un voto più alto di 70 e un id superiore a 120 inserisci nell'array;
        4.1.2 - : ALTRIMENTI non inserirlo;


SNACK 3
PROBLEMA:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

SOLUZIONE:
1 - Creare array di oggetti;
    1.1 - Aggiungere le proprietà nome e peso ad ogni oggetto;
2 - Determinare la bici con peso minore;
3 - Stamparla in console;

SNACK 4 
PROBLEMA: 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

SOLUZIONE:
1 - Creare un array di oggetti;
    1.1 - Inserire per ogni oggetto le proprietà nome, punti fatti, falli subiti;
    1.2 - Compilare solamente la proprità nome;
    1.3 - Settare a 0 le proprietà punti fatti e falli subiti;
2 - Generare un ciclo for;
    2.1 - Creare una funzione per generare numeri random;
    2.2 - Mostrarli nelle proprietà punti fatti e falli subiti;
3 - Creare un nuovo array contenenti le proprietà nome e falli subiti;
    3.1 - Stamparlo in console;