import { TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100 {
  "@class"?: string;
  evento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100 {
    public "@class"?: string;

    public evento?: TEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100Evento;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101EventoCancSubstV100";


        if (props) {

        	this.evento = props.evento;
        }
    }
}
