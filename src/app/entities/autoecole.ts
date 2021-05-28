import { Entity } from './entity';
import { Tarif } from './tarif';

export class AutoEcole extends Entity
{
    nom:String="";
    description:String="";
    logoUrl:String="";
    localisation:String="";
    sitewebUrl:String="";
    planTarif:Tarif;

    hydrate(entity: Record<string | number,any>):void
    {
        for(const key of Object.keys(entity))
        {
            if(Reflect.has(this,key)) {
                if(key=="id") this.id.setId(entity.id)
                else if(key=="planTarif") this.planTarif.hydrate(entity.planTarif)
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
            else if(k=="planTarif") r[k]=this.planTarif.toString();
            else r[k]=Reflect.get(this,k);
        }
        return r;
    }
}

