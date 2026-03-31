// DELETE AFTER BACKEND IS DONE
import { groupData } from "../../../../apis/mockGroupData";
import { MdOutlineGroupRemove } from "react-icons/md";

export function GroupCell({
  groupId
} : {
  groupId: number
}) {
  let groupName = "Could not find group.";
  const group = groupData.find(({ id }) => id === String(groupId));
  if (group) { groupName = group.name; } 

  return (
  <li 
    className="
    bg-[#2A2A2F]
    rounded
    mb-[0.5rem]
    flex
    flex-row
    justify-between
  ">
    <p
      className="
        m-[0.25rem]
        text-[#B4B4C1]
        w-full
        pl-[0.25rem]
        pr-[0.25rem]
        text-sm
      "
    >{groupName}</p>
    <button 
      type="button"
      className="
        p-[0.25rem]
        bg-[#52525c] 
        rounded
        font-[400]
        w-[2.5rem]
        flex
        justify-center
      "
    ><MdOutlineGroupRemove
      className="
        m-auto
        text-xl
      "
    /></button>
  </li>
  );
}
