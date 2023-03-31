
//Creation de la classe Personnage.
class Personnage{
    constructor(pseudo, sante, attaque, niveau){
        this.pseudo = pseudo;
        this.sante = sante;
        this.attaque = attaque;
        niveau = 1;
    };

    //Augment le niveau de personnage de 1.
    evoluer(){
        niveau = niveau + 1;
        console.log(this.pseudo + " passe au niveau " + niveau);
    }
    
    verifierSanter(){
        if(this.sante <= 0){
            this.sante = 0;

            console.log(this.pseudo + " a perdu !");
        }
    }

    get informations(){
        return this.pseudo + " a " + this.sante + " points de vie et est au niveau " + niveau;
    }
}

//Classe Magicien herite de la classe Personnage
class Magicien extends Personnage{
    super(pseudo);
    attaquer(personnage){
        this.personnage = personnage;
    }
}