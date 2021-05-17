import { AccountType } from "src/app/utils/enum";
import { User } from "./user";

export class AutoEcoleFormateur extends User
{
    accountType:AccountType=AccountType.AUTOECOLE_FORMATEUR
}