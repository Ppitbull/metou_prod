import { Entity } from "./entity";

export class TarifConstante
{
    static GRATUIT="gratuit";
    static DEBUTANT="debutant";
    static BUSINESS="business";
    static ULTIME="ultime"
}
export abstract class Tarif extends Entity
{
    prix_session_etudiant=0;
    nombreEtudiat:Number=0;
    inscription:boolean=false;
    paimentEnLigne:boolean=false;
    partageDocument:String="0Mo";
    session:boolean=false;
    examen:boolean=false;
    devoir:boolean=false;
    forumDiscution:boolean=false;
    integrationGSuite:boolean=false;
    agendaCours:boolean=false;
    videoConference:boolean=false;
}

export class PlanGratuit extends Tarif
{
    nombreEtudiat=15;
    inscription=true;
    paimentEnLigne=true;
    partageDocument="5Mo";
    session=true;
    examen=true;
    forumDiscution=true;
}

export class PlanDebutant extends PlanGratuit
{
    devoir=true;
    prix_session_etudiant=500;
}

export class PlanBusiness extends PlanDebutant
{
    prix_session_etudiant=1000;
    integrationGSuite=true;
    agendaCours=true;
}

export class PlanUltime extends PlanBusiness
{
    prix_session_etudiant=2500;
    videoConference=true; 
}

