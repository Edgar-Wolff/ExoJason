"use script";

class Killer{
    constructor(hp, prenom){
        this.hp=hp;
        this.prenom=prenom;
    }
}

let cara=["blonde", "robotique", "amateur de fromage périmé", "déssinateur sans talent", "suicidaire","futé","manipulateur","fan de Bob Marley","danseur unijambiste","boxeur professionel"];
let noms=["Jean", "Jarod", "Jules", "Ilan", "Edgar","Hercule","Zeus","Norman","Luc","Tyson"];


class Personnage{
    constructor(){
    this.nom=noms[Math.floor(Math.random() * noms.length)];
    this.caractéristique=cara[Math.floor(Math.random() * cara.length)];
    this.ProbaMort=Math.floor(Math.random() * 10);
    this.ProbaDegat=Math.floor(Math.random() * (10 - this.ProbaMort));
    this.ProbaMortDegat=(10-this.ProbaMort)-this.ProbaDegat;
    this.ProbaAction=[];
    for(let i=0;i<this.ProbaMort;i++){this.ProbaAction.push("Mort")}
    for(let i=0;i<this.ProbaDegat;i++){this.ProbaAction.push("Dégats")}
    for(let i=0;i<this.ProbaMortDegat;i++){this.ProbaAction.push("Mort et Dégats")}
    }
}

let killer1= new Killer(100,"Jason")

let personnage1= new Personnage();
let personnage2= new Personnage();
let personnage3= new Personnage();
let personnage4= new Personnage();
let personnage5= new Personnage();

console.log(personnage1);
console.log(personnage2);
console.log(personnage3);
console.log(personnage4);
console.log(personnage5);


let persoVivant=[personnage1,personnage2,personnage3,personnage4,personnage5];
let persoMort=[];



while(killer1.hp>0&&persoVivant.length>0){
    let aleaVie=persoVivant[Math.floor(Math.random() * persoVivant.length)];
    let action=aleaVie.ProbaAction[Math.floor(Math.random() * aleaVie.ProbaAction.length)];
    if(action=="Mort"){
        persoMort.push(aleaVie.nom);
        persoVivant.splice(persoVivant.indexOf(aleaVie),1);
        console.log("Jason a tué "+ aleaVie.nom);
    }
    if(action=="Dégats"){
        killer1.hp-=10;
        console.log(aleaVie.nom+ " a esquivé et a infligé 10 dégats");
    }
    if(action=="Mort et Dégats"){
        killer1.hp-=15;
        persoMort.push(aleaVie.nom);
        persoVivant.splice(persoVivant.indexOf(aleaVie),1);
        console.log(aleaVie.nom+" a infligé 15 dégats mais s'est fait tué par Jason");
    }

}

if (killer1.hp<=0){
    console.log("Jason est mort");
    console.log("Les survivants ont gagnés mais RIP à "+persoMort);

}else{
    console.log("Tout les survivants sont morts");
    console.log("RIP à "+persoMort)

}

