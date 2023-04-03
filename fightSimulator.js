
//Creation de la classe Personnage.
class Personnage{
    constructor(pseudo, classe, sante, attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    };

    get informations(){
        return this.pseudo + "(" + this.classe + ")" + " a " + this.sante + " points de vie et est au niveau " + this.niveau + " . ";
    }

    //Augment le niveau de personnage de 1.
    evoluer(){
        //this.niveau = this.niveau + 1;
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }
    
    verifierSanter(){
        if(this.sante <= 0){
            this.sante == 0;

            console.log(this.pseudo + " a perdu !");
        }
    }
}

//Classe Magicien herite de la classe Personnage
class Magicien extends Personnage{
    constructor(pseudo){
     super(pseudo, "magicien", 170, 90);
    }

    attaquer(personnage){
        personnage.sante -= this.attaque;

        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lancant un sort (" + this.attaque + " degats )");

        this.evoluer();
        personnage.verifierSanter();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;

        console.log(this.pseudo + " attaque avec son coup special puissance des arcanes " + personnage.pseudo + "(" + this.attaque * 5 + " degats)");

        this.evoluer();
        personnage.verifierSanter();
    }
}

//Classe Guerrier herite de la classe Personnage
class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
    }
   
    attaquer(personnage){
        personnage.sante -= this.attaque;

        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son epee (" + this.attaque + " degats )");

        this.evoluer();
        personnage.verifierSanter();
    }

    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;

        console.log(this.pseudo + " attaque avec son hache de guerre " + personnage.pseudo + "(" + this.attaque * 5 + " degats)");

        this.evoluer();
        personnage.verifierSanter();
    }
}

//Combat
var gandalf = new Magicien('Gandalf');
var thor = new Guerrier('Thor');

console.log(thor.informations);
console.log(gandalf.informations);

//Gandalf combat thor
gandalf.attaquer(thor);
console.log(gandalf);
gandalf.coupSpecial(thor);

//thor reposte a Gandalf.
thor.attaquer(gandalf);
console.log(thor);
