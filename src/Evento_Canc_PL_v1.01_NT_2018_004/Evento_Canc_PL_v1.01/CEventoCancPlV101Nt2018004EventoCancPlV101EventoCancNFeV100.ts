import { TEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100Evento } from './TEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100Evento';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100 {
  "@class"?: string;
  evento?: TEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100Evento;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100 {
    public "@class"?: string;

    public evento?: TEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100Evento;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101EventoCancNFeV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
