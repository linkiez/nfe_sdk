import { CPl010CNt2022002V130LeiauteNFeV400Avulsa } from './CPl010CNt2022002V130LeiauteNFeV400Avulsa';

import { CPl010CNt2022002V130LeiauteNFeV400Cana } from './CPl010CNt2022002V130LeiauteNFeV400Cana';

import { CPl010CNt2022002V130LeiauteNFeV400Cobr } from './CPl010CNt2022002V130LeiauteNFeV400Cobr';

import { CPl010CNt2022002V130LeiauteNFeV400Compra } from './CPl010CNt2022002V130LeiauteNFeV400Compra';

import { CPl010CNt2022002V130LeiauteNFeV400Dest } from './CPl010CNt2022002V130LeiauteNFeV400Dest';

import { CPl010CNt2022002V130LeiauteNFeV400Det } from './CPl010CNt2022002V130LeiauteNFeV400Det';

import { CPl010CNt2022002V130LeiauteNFeV400Emit } from './CPl010CNt2022002V130LeiauteNFeV400Emit';

import { CPl010CNt2022002V130LeiauteNFeV400Exporta } from './CPl010CNt2022002V130LeiauteNFeV400Exporta';

import { CPl010CNt2022002V130LeiauteNFeV400Ide } from './CPl010CNt2022002V130LeiauteNFeV400Ide';

import { CPl010CNt2022002V130LeiauteNFeV400InfAdic } from './CPl010CNt2022002V130LeiauteNFeV400InfAdic';

import { CPl010CNt2022002V130LeiauteNFeV400InfIntermed } from './CPl010CNt2022002V130LeiauteNFeV400InfIntermed';

import { CPl010CNt2022002V130LeiauteNFeV400InfRespTec } from './CPl010CNt2022002V130LeiauteNFeV400InfRespTec';

import { CPl010CNt2022002V130LeiauteNFeV400InfSolicNff } from './CPl010CNt2022002V130LeiauteNFeV400InfSolicNff';

import { CPl010CNt2022002V130LeiauteNFeV400Local } from './CPl010CNt2022002V130LeiauteNFeV400Local';

import { CPl010CNt2022002V130LeiauteNFeV400Pag } from './CPl010CNt2022002V130LeiauteNFeV400Pag';

import { CPl010CNt2022002V130LeiauteNFeV400Total } from './CPl010CNt2022002V130LeiauteNFeV400Total';

import { CPl010CNt2022002V130LeiauteNFeV400Transp } from './CPl010CNt2022002V130LeiauteNFeV400Transp';

export interface IPl010CNt2022002V130LeiauteNFeV400InfNFe {
  "@class"?: string;
  ide?: CPl010CNt2022002V130LeiauteNFeV400Ide;
  emit?: CPl010CNt2022002V130LeiauteNFeV400Emit;
  avulsa?: CPl010CNt2022002V130LeiauteNFeV400Avulsa;
  dest?: CPl010CNt2022002V130LeiauteNFeV400Dest;
  retirada?: CPl010CNt2022002V130LeiauteNFeV400Local;
  entrega?: CPl010CNt2022002V130LeiauteNFeV400Local;
  det?: CPl010CNt2022002V130LeiauteNFeV400Det;
  total?: CPl010CNt2022002V130LeiauteNFeV400Total;
  transp?: CPl010CNt2022002V130LeiauteNFeV400Transp;
  cobr?: CPl010CNt2022002V130LeiauteNFeV400Cobr;
  pag?: CPl010CNt2022002V130LeiauteNFeV400Pag;
  infIntermed?: CPl010CNt2022002V130LeiauteNFeV400InfIntermed;
  infAdic?: CPl010CNt2022002V130LeiauteNFeV400InfAdic;
  exporta?: CPl010CNt2022002V130LeiauteNFeV400Exporta;
  compra?: CPl010CNt2022002V130LeiauteNFeV400Compra;
  cana?: CPl010CNt2022002V130LeiauteNFeV400Cana;
  infRespTec?: CPl010CNt2022002V130LeiauteNFeV400InfRespTec;
  infSolicNFF?: CPl010CNt2022002V130LeiauteNFeV400InfSolicNff;
}

export class CPl010CNt2022002V130LeiauteNFeV400InfNFe {
    public "@class"?: string;

    public ide?: CPl010CNt2022002V130LeiauteNFeV400Ide;
    public emit?: CPl010CNt2022002V130LeiauteNFeV400Emit;
    public avulsa?: CPl010CNt2022002V130LeiauteNFeV400Avulsa;
    public dest?: CPl010CNt2022002V130LeiauteNFeV400Dest;
    public retirada?: CPl010CNt2022002V130LeiauteNFeV400Local;
    public entrega?: CPl010CNt2022002V130LeiauteNFeV400Local;
    public det?: CPl010CNt2022002V130LeiauteNFeV400Det;
    public total?: CPl010CNt2022002V130LeiauteNFeV400Total;
    public transp?: CPl010CNt2022002V130LeiauteNFeV400Transp;
    public cobr?: CPl010CNt2022002V130LeiauteNFeV400Cobr;
    public pag?: CPl010CNt2022002V130LeiauteNFeV400Pag;
    public infIntermed?: CPl010CNt2022002V130LeiauteNFeV400InfIntermed;
    public infAdic?: CPl010CNt2022002V130LeiauteNFeV400InfAdic;
    public exporta?: CPl010CNt2022002V130LeiauteNFeV400Exporta;
    public compra?: CPl010CNt2022002V130LeiauteNFeV400Compra;
    public cana?: CPl010CNt2022002V130LeiauteNFeV400Cana;
    public infRespTec?: CPl010CNt2022002V130LeiauteNFeV400InfRespTec;
    public infSolicNFF?: CPl010CNt2022002V130LeiauteNFeV400InfSolicNff;

    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400InfNFe) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400InfNFe";


        if (props) {

        	this.ide = (props.ide) ? new CPl010CNt2022002V130LeiauteNFeV400Ide(props.ide): undefined;
        	this.emit = (props.emit) ? new CPl010CNt2022002V130LeiauteNFeV400Emit(props.emit): undefined;
        	this.avulsa = (props.avulsa) ? new CPl010CNt2022002V130LeiauteNFeV400Avulsa(props.avulsa): undefined;
        	this.dest = (props.dest) ? new CPl010CNt2022002V130LeiauteNFeV400Dest(props.dest): undefined;
        	this.retirada = (props.retirada) ? new CPl010CNt2022002V130LeiauteNFeV400Local(props.retirada): undefined;
        	this.entrega = (props.entrega) ? new CPl010CNt2022002V130LeiauteNFeV400Local(props.entrega): undefined;
        	this.det = (props.det) ? new CPl010CNt2022002V130LeiauteNFeV400Det(props.det): undefined;
        	this.total = (props.total) ? new CPl010CNt2022002V130LeiauteNFeV400Total(props.total): undefined;
        	this.transp = (props.transp) ? new CPl010CNt2022002V130LeiauteNFeV400Transp(props.transp): undefined;
        	this.cobr = (props.cobr) ? new CPl010CNt2022002V130LeiauteNFeV400Cobr(props.cobr): undefined;
        	this.pag = (props.pag) ? new CPl010CNt2022002V130LeiauteNFeV400Pag(props.pag): undefined;
        	this.infIntermed = (props.infIntermed) ? new CPl010CNt2022002V130LeiauteNFeV400InfIntermed(props.infIntermed): undefined;
        	this.infAdic = (props.infAdic) ? new CPl010CNt2022002V130LeiauteNFeV400InfAdic(props.infAdic): undefined;
        	this.exporta = (props.exporta) ? new CPl010CNt2022002V130LeiauteNFeV400Exporta(props.exporta): undefined;
        	this.compra = (props.compra) ? new CPl010CNt2022002V130LeiauteNFeV400Compra(props.compra): undefined;
        	this.cana = (props.cana) ? new CPl010CNt2022002V130LeiauteNFeV400Cana(props.cana): undefined;
        	this.infRespTec = (props.infRespTec) ? new CPl010CNt2022002V130LeiauteNFeV400InfRespTec(props.infRespTec): undefined;
        	this.infSolicNFF = (props.infSolicNFF) ? new CPl010CNt2022002V130LeiauteNFeV400InfSolicNff(props.infSolicNFF): undefined;
        }
    }
}
