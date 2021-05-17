import { AccountType } from "src/app/utils/enum";
import { Entity } from "../entity";

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
    accountType:AccountType;
}
