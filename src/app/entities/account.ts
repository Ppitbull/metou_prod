import { Entity } from './entity';


export class User extends Entity
{
    nom:String;
    prenom:String;
    sexe:String;
    age:number;
    email:String;
    photoUrl:String;
    mdp:String;
    tel:String;
}

export class AutoEcoleAdmin extends User
{

}

export class AutoEcoleFormateur extends User
{

}

export class AutoEcoleEtudiant extends User
{

}

export class PlateFormAdmin extends User
{
    
}