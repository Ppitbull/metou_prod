import { AccountType } from "src/app/utils/enum";
import { Entity } from "../entity";
import { EntityID } from "../entityid";

export class User extends Entity
{
    nom:String="";
    prenom:String="";
    sexe:String="";
    age:number=0;
    email:String="";
    photoUrl:String="";
    mdp:String="";
    tel:String="";
    accountType:AccountType;
    dateCreation:String="";
    autoEcoleID:EntityID=new EntityID();
    
    hydrate(entity: Record<string | number,any>):void
    {
        for(const key of Object.keys(entity))
        {
            if(Reflect.has(this,key)) {
                if(key=="id") this.id.setId(entity.id)
                else Reflect.set(this,key,entity[key]);
            }
        }
    }

    toString():Record<string | number,any>
    {
        let r={};
        for(const k of Object.keys(this))
        {
            if(k=="id") r[k]=this.id.toString();
            else r[k]=Reflect.get(this,k);
        }
        return r;
    }
}
