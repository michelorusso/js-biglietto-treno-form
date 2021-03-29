// Button Generate
// Richiamare l'id del pulsante generate ed assegnarlo ad una variabile
// 
// buttonGenerate -> cliccandolo mi porterà a visualizzare 
// il prezzo del biglietto in base alle informazioni che l'utente inserisce
var buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function() {

    // Nome Passeggero
    // 
    // inputUsername -> salviamo la value che l'utente inserirà come nome passeggiero
    var inputUsername = document.getElementById('username-input').value;
    // console.log('Nome dell utente: ', inputUsername);

    // Offerta/Prezzo
    // 
    // pricesKm -> prezzo al km
    var pricesKm = 0.21;

    // inputAge -> salviamo nella variabile  i dati realiti all'età
    var inputAge = document.getElementById('age-input').value;

    // inputKm -> quanti km vuole percorrere l'utente
    // pricesTicketTotal -> in base ai Km che l'utente vorrà percorrere calcoliamo il prezzo del biglietto totale 
    var inputKm = document.getElementById('km-input').value;
    var pricesTicketTotal = pricesKm * inputKm;
    

    // offer -> se l'utente è minorenne otterrà il 20% di sconto 
    // altrimenti se è over 65 otterrà il 40% di sconto
    var offer = 'Nessuno sconto per te!';
    if( inputAge === 'minorenne' ) {
        offer = 'Sconto Minorenne';
        pricesTicketTotal = pricesTicketTotal - (pricesTicketTotal * 0.2);
    } else if ( inputAge === 'over' ) {
        offer = 'Sconto Over 65';
        pricesTicketTotal = pricesTicketTotal - (pricesTicketTotal * 0.4);
    }
    console.log('La tua offerta è : ', offer);
    console.log('Prezzo totale del biglietto dopo lo sconto: ', pricesTicketTotal);

    // Carrozza
    // 
    // carriageRandom -> diamo un numero random per indicare in quale carrozza dovrà andare l'utente
    var carriageRandom = Math.floor(Math.random() * 10) + 1;

    // Codice CP
    // 
    // codeCpRandom -> diamo un numero random per il il codice cp
    var codeCpRandom = Math.floor(Math.random() * 90000) + 10000;

    // STAMPA
    // Nome del passeggiero
    document.getElementById('username-result').innerHTML = '<br>' + inputUsername;
    // Offerta
    document.getElementById('offer-result').innerHTML = '<br>' + offer;
    // Prezzo totale del biglietto
    document.getElementById('ticket-price-result').innerHTML = '<br>' + pricesTicketTotal;
    // Carrozza
    document.getElementById('carriage-result').innerHTML = '<br>' + carriageRandom;
    // Codice CP
    document.getElementById('code-result').innerHTML = '<br>' + codeCpRandom;
});