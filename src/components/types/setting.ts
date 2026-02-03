/**
 * An interface that stores a setting's changed value.
 * 
 */
export type UserSetting = {
  /* Name of the setting */
  name: string,
  
  /* The setting's set value */
  value: boolean | number;
}