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

/**
 * Informações da NFGas
 */
export class CPlNfGas100ENfgasTiposBasicoV100InfNfGas {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação da NFGas
     */
    public ide?: CPlNfGas100ENfgasTiposBasicoV100Ide;
    /**
     * Identificação do Emitente do documento fiscal
     */
    public emit?: CPlNfGas100ENfgasTiposBasicoV100Emit;
    /**
     * Identificação do destinatário
     */
    public dest?: CPlNfGas100ENfgasTiposBasicoV100Dest;
    /**
     * Dados da Instalação OPCIONAL para TpFat=3
     */
    public instalacao?: CPlNfGas100ENfgasTiposBasicoV100Instalacao;
    /**
     * Grupo de informações da substituição
     */
    public gSub?: CPlNfGas100ENfgasTiposBasicoV100GSub;
    /**
     * Grupo de informações das volumes contratados
     */
    public gVolContrat?: CPlNfGas100ENfgasTiposBasicoV100GVolContrat;
    /**
     * Grupo de informações dos Equipamentos de Medição
     */
    public gMed?: CPlNfGas100ENfgasTiposBasicoV100GMed;
    /**
     * Detalhamento de Produtos e Serviços
     */
    public det?: CPlNfGas100ENfgasTiposBasicoV100Det;
    /**
     * Dados dos totais da NFGas Para Tipo de Faturamento Agregador (tpFat=3) todos os totalizadores devem ser zero, exceto vNF e vTotDFe que devem ser a soma do vTotDFe das notas anteriores informadas no grupo gAgregadora
     */
    public total?: CPlNfGas100ENfgasTiposBasicoV100Total;
    /**
     * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 (normal e agregador) Vedado para tpFat 2 (agregado)
     */
    public gFat?: CPlNfGas100ENfgasTiposBasicoV100GFat;
    /**
     * Grupo de informações da Agência reguladora Obrigatorio para tpFat 1 e 2 (normal e agregada) Vedado para tpFat 3 (agregadora)
     */
    public gAgencia?: CPlNfGas100ENfgasTiposBasicoV100GAgencia;
    /**
     * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
     */
    public autXML?: CPlNfGas100ENfgasTiposBasicoV100AutXml;
    /**
     * Informações Adicionais
     */
    public infAdic?: CPlNfGas100ENfgasTiposBasicoV100InfAdic;
    /**
     * Informações do Responsável Técnico pela emissão do DF-e
     */
    public gRespTec?: CPlNfGas100ENfgasTiposBasicoV100RespTec;

    /**
     * Creates a new schema-backed CPlNfGas100ENfgasTiposBasicoV100InfNfGas instance.
     * Schema context: Informações da NFGas
     * @param props - Initial schema-backed values used to populate the instance.
     */
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
