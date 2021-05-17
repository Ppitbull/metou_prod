import { AccountType } from "src/app/utils/enum";
import { User } from "./user";

export class AutoEcoleEtudiant extends User
{
    accountType:AccountType=AccountType.AUTOECOLE_ETUDIANT
}