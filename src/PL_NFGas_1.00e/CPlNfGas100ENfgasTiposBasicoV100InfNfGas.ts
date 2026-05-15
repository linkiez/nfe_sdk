import { CPlNfGas100ENfgasTiposBasicoV100AutXml } from './CPlNfGas100ENfgasTiposBasicoV100AutXml';

import { CPlNfGas100ENfgasTiposBasicoV100Dest } from './CPlNfGas100ENfgasTiposBasicoV100Dest';

import { CPlNfGas100ENfgasTiposBasicoV100Det } from './CPlNfGas100ENfgasTiposBasicoV100Det';

import { CPlNfGas100ENfgasTiposBasicoV100Emit } from './CPlNfGas100ENfgasTiposBasicoV100Emit';

import { CPlNfGas100ENfgasTiposBasicoV100GAgencia } from './CPlNfGas100ENfgasTiposBasicoV100GAgencia';

import { CPlNfGas100ENfgasTiposBasicoV100GFat } from './CPlNfGas100ENfgasTiposBasicoV100GFat';

import { CPlNfGas100ENfgasTiposBasicoV100GMed } from './CPlNfGas100ENfgasTiposBasicoV100GMed';

import { CPlNfGas100ENfgasTiposBasicoV100GSub } from './CPlNfGas100ENfgasTiposBasicoV100GSub';

import { CPlNfGas100ENfgasTiposBasicoV100GVolContrat } from './CPlNfGas100ENfgasTiposBasicoV100GVolContrat';

import { CPlNfGas100ENfgasTiposBasicoV100Ide } from './CPlNfGas100ENfgasTiposBasicoV100Ide';

import { CPlNfGas100ENfgasTiposBasicoV100InfAdic } from './CPlNfGas100ENfgasTiposBasicoV100InfAdic';

import { CPlNfGas100ENfgasTiposBasicoV100Instalacao } from './CPlNfGas100ENfgasTiposBasicoV100Instalacao';

import { CPlNfGas100ENfgasTiposBasicoV100RespTec } from './CPlNfGas100ENfgasTiposBasicoV100RespTec';

import { CPlNfGas100ENfgasTiposBasicoV100Total } from './CPlNfGas100ENfgasTiposBasicoV100Total';

export interface IPlNfGas100ENfgasTiposBasicoV100InfNfGas {
  "@class"?: string;
  ide?: CPlNfGas100ENfgasTiposBasicoV100Ide;
  emit?: CPlNfGas100ENfgasTiposBasicoV100Emit;
  dest?: CPlNfGas100ENfgasTiposBasicoV100Dest;
  instalacao?: CPlNfGas100ENfgasTiposBasicoV100Instalacao;
  gSub?: CPlNfGas100ENfgasTiposBasicoV100GSub;
  gVolContrat?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat;
  gMed?: CPlNfGas100ENfgasTiposBasicoV100GMed;
  det?: CPlNfGas100ENfgasTiposBasicoV100Det;
  total?: CPlNfGas100ENfgasTiposBasicoV100Total;
  gFat?: CPlNfGas100ENfgasTiposBasicoV100GFat;
  gAgencia?: CPlNfGas100ENfgasTiposBasicoV100GAgencia;
  autXML?: CPlNfGas100ENfgasTiposBasicoV100AutXml;
  infAdic?: CPlNfGas100ENfgasTiposBasicoV100InfAdic;
  gRespTec?: CPlNfGas100ENfgasTiposBasicoV100RespTec;
}

export class CPlNfGas100ENfgasTiposBasicoV100InfNfGas {
    public "@class"?: string;

    public ide?: CPlNfGas100ENfgasTiposBasicoV100Ide;
    public emit?: CPlNfGas100ENfgasTiposBasicoV100Emit;
    public dest?: CPlNfGas100ENfgasTiposBasicoV100Dest;
    public instalacao?: CPlNfGas100ENfgasTiposBasicoV100Instalacao;
    public gSub?: CPlNfGas100ENfgasTiposBasicoV100GSub;
    public gVolContrat?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat;
    public gMed?: CPlNfGas100ENfgasTiposBasicoV100GMed;
    public det?: CPlNfGas100ENfgasTiposBasicoV100Det;
    public total?: CPlNfGas100ENfgasTiposBasicoV100Total;
    public gFat?: CPlNfGas100ENfgasTiposBasicoV100GFat;
    public gAgencia?: CPlNfGas100ENfgasTiposBasicoV100GAgencia;
    public autXML?: CPlNfGas100ENfgasTiposBasicoV100AutXml;
    public infAdic?: CPlNfGas100ENfgasTiposBasicoV100InfAdic;
    public gRespTec?: CPlNfGas100ENfgasTiposBasicoV100RespTec;

    public constructor(props?: CPlNfGas100ENfgasTiposBasicoV100InfNfGas) {
        this["@class"] = ".CPlNfGas100ENfgasTiposBasicoV100InfNfGas";


        if (props) {

        	this.ide = (props.ide) ? new CPlNfGas100ENfgasTiposBasicoV100Ide(props.ide): undefined;
        	this.emit = (props.emit) ? new CPlNfGas100ENfgasTiposBasicoV100Emit(props.emit): undefined;
        	this.dest = (props.dest) ? new CPlNfGas100ENfgasTiposBasicoV100Dest(props.dest): undefined;
        	this.instalacao = (props.instalacao) ? new CPlNfGas100ENfgasTiposBasicoV100Instalacao(props.instalacao): undefined;
        	this.gSub = (props.gSub) ? new CPlNfGas100ENfgasTiposBasicoV100GSub(props.gSub): undefined;
        	this.gVolContrat = (props.gVolContrat) ? new CPlNfGas100ENfgasTiposBasicoV100GVolContrat(props.gVolContrat): undefined;
        	this.gMed = (props.gMed) ? new CPlNfGas100ENfgasTiposBasicoV100GMed(props.gMed): undefined;
        	this.det = (props.det) ? new CPlNfGas100ENfgasTiposBasicoV100Det(props.det): undefined;
        	this.total = (props.total) ? new CPlNfGas100ENfgasTiposBasicoV100Total(props.total): undefined;
        	this.gFat = (props.gFat) ? new CPlNfGas100ENfgasTiposBasicoV100GFat(props.gFat): undefined;
        	this.gAgencia = (props.gAgencia) ? new CPlNfGas100ENfgasTiposBasicoV100GAgencia(props.gAgencia): undefined;
        	this.autXML = (props.autXML) ? new CPlNfGas100ENfgasTiposBasicoV100AutXml(props.autXML): undefined;
        	this.infAdic = (props.infAdic) ? new CPlNfGas100ENfgasTiposBasicoV100InfAdic(props.infAdic): undefined;
        	this.gRespTec = (props.gRespTec) ? new CPlNfGas100ENfgasTiposBasicoV100RespTec(props.gRespTec): undefined;
        }
    }
}
