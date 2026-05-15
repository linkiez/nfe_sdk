export interface IPl010CNt2022002V130LeiauteNFeV400IssqNtot {
  "@class"?: string;
  vServ?: unknown;
  vBC?: unknown;
  vISS?: unknown;
  vPIS?: unknown;
  vCOFINS?: unknown;
  dCompet?: unknown;
  vDeducao?: unknown;
  vOutro?: unknown;
  vDescIncond?: unknown;
  vDescCond?: unknown;
  vISSRet?: unknown;
}

export class CPl010CNt2022002V130LeiauteNFeV400IssqNtot {
    public "@class"?: string;

    public vServ?: unknown;
    public vBC?: unknown;
    public vISS?: unknown;
    public vPIS?: unknown;
    public vCOFINS?: unknown;
    public dCompet?: unknown;
    public vDeducao?: unknown;
    public vOutro?: unknown;
    public vDescIncond?: unknown;
    public vDescCond?: unknown;
    public vISSRet?: unknown;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400IssqNtot) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400IssqNtot";


        if (props) {

        	this.vServ = props.vServ;
        	this.vBC = props.vBC;
        	this.vISS = props.vISS;
        	this.vPIS = props.vPIS;
        	this.vCOFINS = props.vCOFINS;
        	this.dCompet = props.dCompet;
        	this.vDeducao = props.vDeducao;
        	this.vOutro = props.vOutro;
        	this.vDescIncond = props.vDescIncond;
        	this.vDescCond = props.vDescCond;
        	this.vISSRet = props.vISSRet;
        }
    }
}
