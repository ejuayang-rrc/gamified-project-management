import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import type { UserSetting } from "../../types/setting";

export function SettingCard(
  {
    setting, 
    isExpanded, 
    onTitleClick,
    onSaveClick
  } 
  : {
    setting: UserSetting, 
    isExpanded: boolean, 
    onTitleClick: () => void,
    onSaveClick: () => void
  }
) {
  return (
  <div className="card">
    <div className="card-top">
      <h3 onClick={onTitleClick}>{setting.name}</h3>

      <button onClick={onSaveClick}>
        {setting.value ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </button>
    </div>

    { isExpanded ? <p>{setting.description}</p> : null }
  </div>
  );
}