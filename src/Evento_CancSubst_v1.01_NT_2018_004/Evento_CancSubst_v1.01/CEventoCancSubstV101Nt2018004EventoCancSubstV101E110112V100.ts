import { CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento } from './CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento';

export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100 {
  "@class"?: string;
  detEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100 {
    public "@class"?: string;

    public detEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento(props.detEvento): undefined;
        }
    }
}
