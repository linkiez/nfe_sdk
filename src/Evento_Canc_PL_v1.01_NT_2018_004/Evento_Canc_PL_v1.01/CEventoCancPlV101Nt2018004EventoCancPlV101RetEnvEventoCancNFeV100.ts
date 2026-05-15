import { TEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento } from './TEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100 {
  "@class"?: string;
  retEnvEvento?: TEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100 {
    public "@class"?: string;

    public retEnvEvento?: TEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100RetEnvEvento;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101RetEnvEventoCancNFeV100";


        if (props) {

        	this.retEnvEvento = props.retEnvEvento;
        }
    }
}
