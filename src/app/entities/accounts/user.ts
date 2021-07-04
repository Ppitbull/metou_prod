import { AccountType } from "src/app/shared/utils/enum";
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
    
    getPrintableName()
    {
        return this.prenom.length>0?this.prenom:this.nom
    }
    getFullName()
    {
        return `${this.prenom} ${this.nom}`
    }

    getRole()
    {
        let role:String="";
        switch(this.accountType)
        {
            case AccountType.PLATEFROM_ADMIN:
                role="Super Administrateur";
                break;
            case AccountType.AUTOECOLE_ADMIN:
                role="Administrateur";
                break;
            case AccountType.AUTOECOLE_ETUDIANT:
                role="Etudiant";
                break;
            case AccountType.AUTOECOLE_FORMATEUR:
                role="Formateur";
                break;
        }
        return role;
    }

    hydrate(entity: Record<string | number,any>):void
    {
        for(const key of Object.keys(entity))
        {
            if(Reflect.has(this,key)) {
                if(key=="id") this.id.setId(entity.id)
                if(key=="autoEcoleID") this.autoEcoleID.setId(entity.id)
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
            if(k=="autoEcoleID") r[k]=this.autoEcoleID.toString();
            else r[k]=Reflect.get(this,k);
        }
        return r;
    }
}
