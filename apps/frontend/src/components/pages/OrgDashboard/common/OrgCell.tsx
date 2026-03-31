import type { JSX } from "react";
import type { Organization } from "../../../../types/organizationType";
import { GroupCell } from "./GroupCell";

import { MdOutlineGroupAdd } from "react-icons/md";

export function OrgCell({
  org
} : {
  org: Organization
}) {
  const listGroups: JSX.Element[] = org.groups.map((group) => {
    return (
      <GroupCell
        groupId={group}
        key={group}
      />
    )
  });

  return (
    <div
    className="
      bg-zinc-900
      m-[0.25rem]
      p-[1rem]
      rounded-[1.3rem]
      min-w-[49%]
      grow
    ">
      <h1
        className="
          font-[500]
          text-lg
          text-center
      ">{org.name}</h1>
      <div 
        className="
          h-px
          w-full
          bg-white/10
          mt-[0.5rem]
          mb-[0.5rem]
      "/>
      <ol>{listGroups}</ol>
      <div
        className="
          flex
          justify-between
        "
      >
        <button
          type="button"
          className="
            p-[0.25rem]
            bg-[#52525c] 
            rounded
            font-[400]
            w-full
            text-sm
            mr-[0.25rem]
          "
        >Add Department</button>
        <button
          type="button"
          className="
            p-[0.25rem]
            bg-[#52525c] 
            rounded
            font-[400]
            w-full
            text-sm
            ml-[0.25rem]
          "
        >Delete Organization</button>
      </div>
    </div>
  );
}