import { AccountType } from "src/app/shared/utils/enum";
import { User } from "./user";

export class AutoEcoleAdmin extends User
{
    accountType:AccountType=AccountType.AUTOECOLE_ADMIN
}