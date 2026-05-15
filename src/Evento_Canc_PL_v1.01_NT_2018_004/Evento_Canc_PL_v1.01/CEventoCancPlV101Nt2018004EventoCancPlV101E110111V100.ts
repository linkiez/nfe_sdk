import { CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100DetEvento } from './CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100DetEvento';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101E110111V100 {
  "@class"?: string;
  detEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100DetEvento;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100 {
    public "@class"?: string;

    public detEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100DetEvento;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101E110111V100DetEvento(props.detEvento): undefined;
        }
    }
}
