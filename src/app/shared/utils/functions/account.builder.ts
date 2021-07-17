import { AutoEcoleAdmin, AutoEcoleEtudiant, AutoEcoleFormateur, PlateFormAdmin, User } from "src/app/entities/accounts"
import { AccountType } from "../enum";


export function accountBuilder(entity:Record<string,any>) : User
{
    let user:User;
    switch (entity.accountType)
    {
        case AccountType.PLATEFROM_ADMIN:
            user=new PlateFormAdmin();
            break
        case AccountType.AUTOECOLE_ADMIN:
            user = new AutoEcoleAdmin();
            break;
        case AccountType.AUTOECOLE_FORMATEUR:
            user = new AutoEcoleFormateur();
            break;
        case AccountType.AUTOECOLE_ETUDIANT:
            user = new AutoEcoleEtudiant();
            break;
        default:
            user = new User();
    }
    user.hydrate(entity);
    return user;
}
