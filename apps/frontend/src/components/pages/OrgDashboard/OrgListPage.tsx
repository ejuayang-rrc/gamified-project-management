import type { Organization } from "../../../types/organizationType";
import { useOrgs } from "../../../hooks/useOrgs";
import { OrgDisplay } from "./widgets/OrgDisplay";
import { HiOutlinePlus } from "react-icons/hi";

type OrgListPageProps = {
  title: string,
  orgDependencies: any[],
  orgFilterFn: ((org: Organization) => boolean)|null
}

const OrgListPage = ({title, orgDependencies, orgFilterFn}: OrgListPageProps) => {
  const { orgs, response, orgAddOrRemoveGroup } = useOrgs(orgDependencies, orgFilterFn);

  return (
    <>
      <h1 
        className="
          text-2xl 
          font-bold 
          tracking-tight 
          pb-2
        "
      >{title}</h1>
      <div 
        className="
          h-px
          w-full
          bg-white/10
          mb-[0.5rem]
      "/>
      <form
        className="
          bg-zinc-900
          m-[0.25rem]
          p-[1rem]
          rounded-[1.3rem]
        "
      > 
        <h2
        className="
          text-xl 
          tracking-tight 
          pb-2
        ">Create Organization</h2>
        <div
          className="
            flex
          "
        >
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
            "
            placeholder="Add Department Name"
          />
          <button
            type="button"
            className="
              p-[0.25rem]
              bg-[#52525c] 
              hover:bg-[#5F5F68]
              rounded
              font-[400]
              cursor-pointer
              w-[14rem]
              ml-[0.5em]
            "
          >Create Organization</button>
        </div>
      </form>
      <OrgDisplay 
        orgs={orgs}
      />
    </>
  );
};

export default OrgListPage;