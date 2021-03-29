// Button Generate
// Richiamare l'id del pulsante generate ed assegnarlo ad una variabile
// 
// buttonGenerate -> cliccandolo mi porterà a visualizzare 
// il prezzo del biglietto in base alle informazioni che l'utente inserisce
var buttonGenerate = document.getElementById('generate');
buttonGenerate.addEventListener('click', function() {

    // Nome Passeggero
    // 
    // inputUsername -> salviamo nella variabile la value che l'utente inserirà come nome passeggiero
    var inputUsername = document.getElementById('username-input').value;

    // Offerta








    // Stampa
    // Stampiamo il nome del passeggiero
    document.getElementById('username-result').innerHTML = '<br>' + inputUsername;
});