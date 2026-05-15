import { TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100 {
  "@class"?: string;
  envEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100 {
    public "@class"?: string;

    public envEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100EnvEvento;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101EnvEventoCancSubstV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
