import { EntityID } from "src/app/entities/entityid";
import { DbBranch } from "../enum/db-branch.enum";

export function getBranchOfUserInAutoEcole(autoEcoleID:EntityID, userID:EntityID):string
{
    return `${DbBranch.specific_auto_ecole_branch}/${autoEcoleID.toString()}/users/${userID.toString()}`
}

export function getBranchOfUsersInAutoEcole(autoEcoleID:EntityID):string
{
    return `${DbBranch.specific_auto_ecole_branch}/${autoEcoleID.toString()}`;
}

export function getBranchOfAutoEcole(autoEcoleID:EntityID):string
{
    return `${DbBranch.general_auto_ecole_branch}/${autoEcoleID.toString()}`;
}

export function getBranchOfMappedUsers(userID:EntityID):string
{
    return `${DbBranch.general_user_map}/${userID.toString()}`
}