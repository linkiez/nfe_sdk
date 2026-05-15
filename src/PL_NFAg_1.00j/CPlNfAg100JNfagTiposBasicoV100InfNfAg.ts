import { CPlNfAg100JNfagTiposBasicoV100AutXml } from './CPlNfAg100JNfagTiposBasicoV100AutXml';

import { CPlNfAg100JNfagTiposBasicoV100Dest } from './CPlNfAg100JNfagTiposBasicoV100Dest';

import { CPlNfAg100JNfagTiposBasicoV100Det } from './CPlNfAg100JNfagTiposBasicoV100Det';

import { CPlNfAg100JNfagTiposBasicoV100Emit } from './CPlNfAg100JNfagTiposBasicoV100Emit';

import { CPlNfAg100JNfagTiposBasicoV100GAgencia } from './CPlNfAg100JNfagTiposBasicoV100GAgencia';

import { CPlNfAg100JNfagTiposBasicoV100GFat } from './CPlNfAg100JNfagTiposBasicoV100GFat';

import { CPlNfAg100JNfagTiposBasicoV100GFatConjunto } from './CPlNfAg100JNfagTiposBasicoV100GFatConjunto';

import { CPlNfAg100JNfagTiposBasicoV100GMed } from './CPlNfAg100JNfagTiposBasicoV100GMed';

import { CPlNfAg100JNfagTiposBasicoV100GQualiAgua } from './CPlNfAg100JNfagTiposBasicoV100GQualiAgua';

import { CPlNfAg100JNfagTiposBasicoV100GSub } from './CPlNfAg100JNfagTiposBasicoV100GSub';

import { CPlNfAg100JNfagTiposBasicoV100Ide } from './CPlNfAg100JNfagTiposBasicoV100Ide';

import { CPlNfAg100JNfagTiposBasicoV100InfAdic } from './CPlNfAg100JNfagTiposBasicoV100InfAdic';

import { CPlNfAg100JNfagTiposBasicoV100InfPaa } from './CPlNfAg100JNfagTiposBasicoV100InfPaa';

import { CPlNfAg100JNfagTiposBasicoV100Ligacao } from './CPlNfAg100JNfagTiposBasicoV100Ligacao';

import { CPlNfAg100JNfagTiposBasicoV100RespTec } from './CPlNfAg100JNfagTiposBasicoV100RespTec';

import { CPlNfAg100JNfagTiposBasicoV100Total } from './CPlNfAg100JNfagTiposBasicoV100Total';

export interface IPlNfAg100JNfagTiposBasicoV100InfNfAg {
  "@class"?: string;
  ide?: CPlNfAg100JNfagTiposBasicoV100Ide;
  emit?: CPlNfAg100JNfagTiposBasicoV100Emit;
  dest?: CPlNfAg100JNfagTiposBasicoV100Dest;
  ligacao?: CPlNfAg100JNfagTiposBasicoV100Ligacao;
  gSub?: CPlNfAg100JNfagTiposBasicoV100GSub;
  gMed?: CPlNfAg100JNfagTiposBasicoV100GMed;
  gFatConjunto?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto;
  det?: CPlNfAg100JNfagTiposBasicoV100Det;
  total?: CPlNfAg100JNfagTiposBasicoV100Total;
  gFat?: CPlNfAg100JNfagTiposBasicoV100GFat;
  gAgencia?: CPlNfAg100JNfagTiposBasicoV100GAgencia;
  gQualiAgua?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua;
  autXML?: CPlNfAg100JNfagTiposBasicoV100AutXml;
  infAdic?: CPlNfAg100JNfagTiposBasicoV100InfAdic;
  infPAA?: CPlNfAg100JNfagTiposBasicoV100InfPaa;
  gRespTec?: CPlNfAg100JNfagTiposBasicoV100RespTec;
}

export class CPlNfAg100JNfagTiposBasicoV100InfNfAg {
    public "@class"?: string;

    public ide?: CPlNfAg100JNfagTiposBasicoV100Ide;
    public emit?: CPlNfAg100JNfagTiposBasicoV100Emit;
    public dest?: CPlNfAg100JNfagTiposBasicoV100Dest;
    public ligacao?: CPlNfAg100JNfagTiposBasicoV100Ligacao;
    public gSub?: CPlNfAg100JNfagTiposBasicoV100GSub;
    public gMed?: CPlNfAg100JNfagTiposBasicoV100GMed;
    public gFatConjunto?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto;
    public det?: CPlNfAg100JNfagTiposBasicoV100Det;
    public total?: CPlNfAg100JNfagTiposBasicoV100Total;
    public gFat?: CPlNfAg100JNfagTiposBasicoV100GFat;
    public gAgencia?: CPlNfAg100JNfagTiposBasicoV100GAgencia;
    public gQualiAgua?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua;
    public autXML?: CPlNfAg100JNfagTiposBasicoV100AutXml;
    public infAdic?: CPlNfAg100JNfagTiposBasicoV100InfAdic;
    public infPAA?: CPlNfAg100JNfagTiposBasicoV100InfPaa;
    public gRespTec?: CPlNfAg100JNfagTiposBasicoV100RespTec;

    public constructor(props?: CPlNfAg100JNfagTiposBasicoV100InfNfAg) {
        this["@class"] = ".CPlNfAg100JNfagTiposBasicoV100InfNfAg";


        if (props) {

        	this.ide = (props.ide) ? new CPlNfAg100JNfagTiposBasicoV100Ide(props.ide): undefined;
        	this.emit = (props.emit) ? new CPlNfAg100JNfagTiposBasicoV100Emit(props.emit): undefined;
        	this.dest = (props.dest) ? new CPlNfAg100JNfagTiposBasicoV100Dest(props.dest): undefined;
        	this.ligacao = (props.ligacao) ? new CPlNfAg100JNfagTiposBasicoV100Ligacao(props.ligacao): undefined;
        	this.gSub = (props.gSub) ? new CPlNfAg100JNfagTiposBasicoV100GSub(props.gSub): undefined;
        	this.gMed = (props.gMed) ? new CPlNfAg100JNfagTiposBasicoV100GMed(props.gMed): undefined;
        	this.gFatConjunto = (props.gFatConjunto) ? new CPlNfAg100JNfagTiposBasicoV100GFatConjunto(props.gFatConjunto): undefined;
        	this.det = (props.det) ? new CPlNfAg100JNfagTiposBasicoV100Det(props.det): undefined;
        	this.total = (props.total) ? new CPlNfAg100JNfagTiposBasicoV100Total(props.total): undefined;
        	this.gFat = (props.gFat) ? new CPlNfAg100JNfagTiposBasicoV100GFat(props.gFat): undefined;
        	this.gAgencia = (props.gAgencia) ? new CPlNfAg100JNfagTiposBasicoV100GAgencia(props.gAgencia): undefined;
        	this.gQualiAgua = (props.gQualiAgua) ? new CPlNfAg100JNfagTiposBasicoV100GQualiAgua(props.gQualiAgua): undefined;
        	this.autXML = (props.autXML) ? new CPlNfAg100JNfagTiposBasicoV100AutXml(props.autXML): undefined;
        	this.infAdic = (props.infAdic) ? new CPlNfAg100JNfagTiposBasicoV100InfAdic(props.infAdic): undefined;
        	this.infPAA = (props.infPAA) ? new CPlNfAg100JNfagTiposBasicoV100InfPaa(props.infPAA): undefined;
        	this.gRespTec = (props.gRespTec) ? new CPlNfAg100JNfagTiposBasicoV100RespTec(props.gRespTec): undefined;
        }
    }
}
