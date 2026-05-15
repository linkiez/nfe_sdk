import { TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe } from './TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100 {
  "@class"?: string;
  procEventoNFe?: TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100ProcEventoNFe;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101ProcEventoCancSubstV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
