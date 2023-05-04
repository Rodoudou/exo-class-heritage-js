class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  evoluer() {
    this.niveau++;
     console.log(`${this.pseudo} passe au niveau ${this.niveau} !`);
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
       console.log(`${this.pseudo} a perdu !`);
    } else {
      console.log(`${this.pseudo} a encore ${this.sante} points de vie.`);
    }
  }

  get informations() {
    console.log(`${this.pseudo} ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau}.`);
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégâts`);
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(`${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} (${this.attaque} dégâts)`);
    this.evoluer();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son épée (${this.attaque} dégâts`);
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
      console.log(`${this.pseudo} attaque avec son coup spécial haches de guerre ${personnage.pseudo} (${this.attaque} dégâts)`);
      this.evoluer();
      personnage.verifierSante();
  }
}

let lyna = new Magicien("Lyna");
let aurele = new Guerrier("Aurele");

aurele.informations;
lyna.informations;

lyna.attaquer(aurele);
aurele.informations;
aurele.attaquer(lyna);
lyna.informations;
lyna.coupSpecial(aurele);