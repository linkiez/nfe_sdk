import { TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100 {
  "@class"?: string;
  retEnvEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100RetEnvEvento;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101RetEnvEventoCancSubstV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
