let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    aggiungo_score : function(){

        for (let i = 0; i < this.players.length; i++) {
            for (let j = 0; j < 10; j++) {
                
                let punto = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                this.players[i].scores.push(punto);
                
                
            }
            
        }


    },

    aggiungo_giocatore : function(name){

        this.players.push({'name': name, 'scores': []})


    },

    mostra_risultati : function(){
        for (let i = 0; i < this.players.length; i++) {
            console.log(this.players[i].name, this.players[i].scores, this.players[i].total);
            
            
        }
    },

    calcola_totali : function(){
        for (let i = 0; i < this.players.length; i++) {

            let somma = 0;

            for (let j = 0; j < this.players[i].scores.length; j++) {
                somma += this.players[i].scores[j];
                
            }

            this.players[i].total = somma;
            
        }
    },

    confronto : function(a, b){

        return b.total - a.total;

    },

    mostra_vincitore : function(){
    
        console.log(`Il vincitore è ${this.players[0].name} con ${this.players[0].total} punti`);
        
    
    },

    classifica_finale : function(){
        for (let i = 0; i < this.players.length; i++) {
            console.log(`${i + 1}° ${this.players[i].name} - ${this.players[i].total} punti`);
            
            
        }
    }

    



}

bowling.aggiungo_giocatore('Marta');
bowling.aggiungo_score();
bowling.calcola_totali();
bowling.players.sort(bowling.confronto);
bowling.mostra_risultati();
bowling.mostra_vincitore();

bowling.classifica_finale();

