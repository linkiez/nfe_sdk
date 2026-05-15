export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento {
  "@class"?: string;
  cOrgaoAutor?: unknown;
  verAplic?: unknown;
  nProt?: unknown;
  xJust?: unknown;
  chNFeRef?: unknown;
}

export class CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento {
    public "@class"?: string;

    public cOrgaoAutor?: unknown;
    public verAplic?: unknown;
    public nProt?: unknown;
    public xJust?: unknown;
    public chNFeRef?: unknown;

    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento";


        if (props) {

        	this.cOrgaoAutor = props.cOrgaoAutor;
        	this.verAplic = props.verAplic;
        	this.nProt = props.nProt;
        	this.xJust = props.xJust;
        	this.chNFeRef = props.chNFeRef;
        }
    }
}
