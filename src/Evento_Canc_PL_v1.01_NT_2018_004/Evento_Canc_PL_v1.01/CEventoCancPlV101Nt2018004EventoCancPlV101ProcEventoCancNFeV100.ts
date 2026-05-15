import { TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe } from './TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100 {
  "@class"?: string;
  procEventoNFe?: TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100 {
    public "@class"?: string;

    public procEventoNFe?: TEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100ProcEventoNFe;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101ProcEventoCancNFeV100";


        if (props) {

        	this.procEventoNFe = props.procEventoNFe;
        }
    }
}
