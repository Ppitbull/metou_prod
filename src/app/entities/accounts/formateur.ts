import { AccountType } from "src/app/shared/utils/enum";
import { User } from "./user";

export class AutoEcoleFormateur extends User
{
    accountType:AccountType=AccountType.AUTOECOLE_FORMATEUR
}