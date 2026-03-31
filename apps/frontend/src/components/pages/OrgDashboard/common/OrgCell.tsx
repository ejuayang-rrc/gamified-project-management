import type { JSX } from "react";
import type { Organization } from "../../../../types/organizationType";
import { GroupCell } from "./GroupCell";

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
    );
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
          mb-[0.5rem]
          ml-[0.25rem]
      ">{org.name}</h1>
      <ol>
        {
          org.groups.length <= 0 ? 
          <p
            className="
              p-[0.25rem]
              text-[#52525c] 
              rounded
              font-[400]
              w-full
              text-sm
              mr-[0.25rem]
              mb-[0.5rem]
            "
          >No Departments</p> 
          : listGroups
        }
      </ol>
      <form>
        <input 
          type="text" 
          id="dept-name" 
          name="dept-name"
          className="
            p-[0.25rem]
            bg-[#2A2A2F] 
            rounded
            font-[400]
            w-full
            text-sm
            mr-[0.25rem]
            mb-[0.5rem]
          "
          placeholder=" Add Department Name"
        />
        <div
          className="
            flex
            justify-between
          "
        >
          <button
            type="submit"
            className="
              p-[0.25rem]
              bg-[#52525c] 
              hover:bg-[#5F5F68]
              rounded
              font-[400]
              w-full
              text-sm
              mr-[0.25rem]
              cursor-pointer
            "
          >Add Department</button>
          <button
            type="button"
            className="
              p-[0.25rem]
              bg-[#52525c] 
              hover:bg-[#D8382F] 
              rounded
              font-[400]
              w-full
              text-sm
              ml-[0.25rem]
              cursor-pointer
            "
          >Delete Organization</button>
        </div>
      </form>
    </div>
  );
}