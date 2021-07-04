import { AccountType } from "src/app/shared/utils/enum";
import { EntityID } from "../entityid";
import { User } from "./user";

export class AutoEcoleEtudiant extends User
{
    accountType:AccountType=AccountType.AUTOECOLE_ETUDIANT
    inscrit:boolean=false;
    inscriptionSessionID:EntityID=new EntityID()
    examSessionID:EntityID=new EntityID();
    constructor(){
        super();
        this.inscriptionSessionID.setId("non_inscrit")
    }
    hydrate(entity: Record<string | number,any>):void
    {
        for(const key of Object.keys(entity))
        {
            if(Reflect.has(this,key)) {
                if(key=="id") this.id.setId(entity.id)
                if(key=="autoEcoleID") this.autoEcoleID.setId(entity.id)
                if(key=="inscriptionSessionID") this.inscriptionSessionID.setId(entity.id)
                if(key=="examSessionID") this.examSessionID.setId(entity.id)
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
            else if(k=="autoEcoleID") r[k]=this.autoEcoleID.toString();
            else if(k=="inscriptionSessionID") r[k]=this.inscriptionSessionID.toString();
            else if(k=="examSessionID") r[k]=this.examSessionID.toString();
            else r[k]=Reflect.get(this,k);
        }
        return r;
    }
}