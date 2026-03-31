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
      <OrgDisplay 
        orgs={orgs}
      />
      <div
        className="
          m-auto
        "
      >
        <button
          type="button"
          className="
            p-[0.25rem]
            bg-[#52525c] 
            rounded-[1rem]
            font-[400]
            w-[6em]
            h-[3em]
          "
        ><HiOutlinePlus
          className="
            text-3xl
            m-auto
          "
        /></button>
      </div>
    </>
  );
};

export default OrgListPage;