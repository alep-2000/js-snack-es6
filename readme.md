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