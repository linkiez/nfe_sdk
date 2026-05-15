import { TEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100EnvEvento } from './TEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100EnvEvento';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100 {
  "@class"?: string;
  envEvento?: TEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100EnvEvento;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100 {
    public "@class"?: string;

    public envEvento?: TEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100EnvEvento;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101EnvEventoCancNFeV100";


        if (props) {

        	this.envEvento = props.envEvento;
        }
    }
}
