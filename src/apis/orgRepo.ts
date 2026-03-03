import type { Organization } from "../types/organizationType";
import { orgData } from "./mockOrgData";

export function fetchOrg(): Organization[] {
  return orgData;
}

export function getOrgById(orgId: number): Organization {
  try {
    const getOrg = orgData.find(entry => entry.id === orgId);

    if(!getOrg) {
      throw new Error(`Org with ${orgId} cannot be found`);
    }

    return getOrg;
  } catch (error: unknown) {
    throw error;
  }
}

export function addGroupToOrg(
  orgId: number,
  groupId: number
) {
  try {

  } catch (error: unknown) {
    throw error;
  }
}

export function removeGroupFromOrg() {
  try {
    
  } catch (error: unknown) {
    throw error;
  }
}

export function createOrganization(
  orgName: string
): Organization {
  try {
    let newId: number = 0;
    let isNotUnique: boolean = true;

    // Goes through branches until new ID doesn't match existing IDs
    while (isNotUnique) {
      newId += 1;
      isNotUnique = false;

      for (const key in orgData) {
        if (newId === orgData[key].id) {
          isNotUnique = true;
          break
        }
      }
    }

    const newOrg: Organization = {
      id: newId,
      name: orgName,
      groups: []
    };

    orgData.push(newOrg);
    return newOrg;
  } catch (error: unknown) {
    throw error;
  }
}

export function deleteOrganization(orgId: number) {
  try {
    const getOrg = orgData.find(entry => entry.id === orgId);

    if(!getOrg) {
      throw new Error(`Org with ${orgId} cannot be found`);
    }
      
    orgData.splice(orgId, 1);
  } catch (error: unknown) {
    throw error;
  }
}