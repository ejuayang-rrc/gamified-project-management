import type { JSX } from "react";

import type { Organization } from "../../../../types/organizationType";
import { OrgCell } from "../common/OrgCell";

export function OrgDisplay({orgs}: {
    orgs: Organization[]
  }
) {
  const listOrgs: JSX.Element[] = orgs.map((org) => {
    return (
      <OrgCell
        org={org}
        key={org.id}
      />
    )
  });

  return (
    <div
      className="
        flex 
        flex-wrap
        w-full
        justify-between
      "
    >{listOrgs}</div>
  )
}