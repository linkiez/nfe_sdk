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

/**
 * Informações da NFAg
 */
export class CPlNfAg100JNfagTiposBasicoV100InfNfAg {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação da NFAg
     */
    public ide?: CPlNfAg100JNfagTiposBasicoV100Ide;
    /**
     * Identificação do Emitente do documento fiscal
     */
    public emit?: CPlNfAg100JNfagTiposBasicoV100Emit;
    /**
     * Identificação do destinatário
     */
    public dest?: CPlNfAg100JNfagTiposBasicoV100Dest;
    /**
     * Dados da Ligação
     */
    public ligacao?: CPlNfAg100JNfagTiposBasicoV100Ligacao;
    /**
     * Grupo de informações da substituição
     */
    public gSub?: CPlNfAg100JNfagTiposBasicoV100GSub;
    /**
     * Grupo de informações dos Medidores
     */
    public gMed?: CPlNfAg100JNfagTiposBasicoV100GMed;
    /**
     * Grupo de Informações do Faturamento conjunto
     */
    public gFatConjunto?: CPlNfAg100JNfagTiposBasicoV100GFatConjunto;
    /**
     * Detalhamento de Produtos e Serviços
     */
    public det?: CPlNfAg100JNfagTiposBasicoV100Det;
    /**
     * Dados dos totais da NFAg
     */
    public total?: CPlNfAg100JNfagTiposBasicoV100Total;
    /**
     * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 Vedado para tpFat 2
     */
    public gFat?: CPlNfAg100JNfagTiposBasicoV100GFat;
    /**
     * Grupo de informações da Agência reguladora
     */
    public gAgencia?: CPlNfAg100JNfagTiposBasicoV100GAgencia;
    /**
     * Informações sobre a qualidade de água
     */
    public gQualiAgua?: CPlNfAg100JNfagTiposBasicoV100GQualiAgua;
    /**
     * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
     */
    public autXML?: CPlNfAg100JNfagTiposBasicoV100AutXml;
    /**
     * Informações Adicionais
     */
    public infAdic?: CPlNfAg100JNfagTiposBasicoV100InfAdic;
    /**
     * Grupo de Informação do Provedor de Assinatura e Autorização
     */
    public infPAA?: CPlNfAg100JNfagTiposBasicoV100InfPaa;
    /**
     * Informações do Responsável Técnico pela emissão do DF-e
     */
    public gRespTec?: CPlNfAg100JNfagTiposBasicoV100RespTec;

    /**
     * Creates a new schema-backed CPlNfAg100JNfagTiposBasicoV100InfNfAg instance.
     * Schema context: Informações da NFAg
     * @param props - Initial schema-backed values used to populate the instance.
     */
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
