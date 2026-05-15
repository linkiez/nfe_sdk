import { CPl010CNt2022002V130LeiauteNFeV400DetExport } from './CPl010CNt2022002V130LeiauteNFeV400DetExport';

import { CPl010CNt2022002V130LeiauteNFeV400Di } from './CPl010CNt2022002V130LeiauteNFeV400Di';

import { CPl010CNt2022002V130LeiauteNFeV400GCred } from './CPl010CNt2022002V130LeiauteNFeV400GCred';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdEmb } from './CPl010CNt2022002V130LeiauteNFeV400InfProdEmb';

import { CPl010CNt2022002V130LeiauteNFeV400InfProdNff } from './CPl010CNt2022002V130LeiauteNFeV400InfProdNff';

import { CPl010CNt2022002V130LeiauteNFeV400Rastro } from './CPl010CNt2022002V130LeiauteNFeV400Rastro';

import { TPl010CNt2022002V130LeiauteNFeV400Guid } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130LeiauteNFeV400Guid';

/**
 * Dados dos produtos e serviços da NF-e
 */
export class CPl010CNt2022002V130LeiauteNFeV400Prod {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Grupo de informações sobre o CréditoPresumido
     */
    public gCred?: CPl010CNt2022002V130LeiauteNFeV400GCred;
    /**
     * Classificação para subapuração do IBS na ZFM
     */
    public tpCredPresIBSZFM?: unknown;
    /**
     * Quantidade Comercial do produto, alterado para aceitar de 0 a 4 casas decimais e 11 inteiros.
     */
    public qCom?: unknown;
    /**
     * Valor unitário de comercialização - alterado para aceitar 0 a 10 casas decimais e 11 inteiros
     */
    public vUnCom?: unknown;
    /**
     * Valor bruto do produto ou serviço.
     */
    public vProd?: unknown;
    /**
     * Quantidade Tributável - alterado para aceitar de 0 a 4 casas decimais e 11 inteiros
     */
    public qTrib?: unknown;
    /**
     * Valor unitário de tributação - alterado para aceitar 0 a 10 casas decimais e 11 inteiros
     */
    public vUnTrib?: unknown;
    /**
     * Valor Total do Frete
     */
    public vFrete?: unknown;
    /**
     * Valor Total do Seguro
     */
    public vSeg?: unknown;
    /**
     * Valor do Desconto
     */
    public vDesc?: unknown;
    /**
     * Outras despesas acessórias
     */
    public vOutro?: unknown;
    /**
     * Declaração de Importação (NT 2011/004)
     */
    public CPl010CNt2022002V130LeiauteNFeV400Di?: CPl010CNt2022002V130LeiauteNFeV400Di;
    /**
     * Detalhe da exportação
     */
    public detExport?: CPl010CNt2022002V130LeiauteNFeV400DetExport;
    /**
     * Número de controle da FCI - Ficha de Conteúdo de Importação.
     */
    public nFCI?: TPl010CNt2022002V130LeiauteNFeV400Guid;
    /**
     * Número do lote do produto.
     */
    public rastro?: CPl010CNt2022002V130LeiauteNFeV400Rastro;
    /**
     * Informações mais detalhadas do produto (usada na NFF)
     */
    public infProdNFF?: CPl010CNt2022002V130LeiauteNFeV400InfProdNff;
    /**
     * Informações mais detalhadas do produto (usada na NFF)
     */
    public infProdEmb?: CPl010CNt2022002V130LeiauteNFeV400InfProdEmb;

    //choice

    /**
     * Veículos novos
     * @param arg - Branch value assigned to veicProd.
     */
    public veicProd(arg: unknown) {
        delete((this as any).med);
        delete((this as any).arma);
        delete((this as any).comb);
        (this as any).veicProd = arg;
    }

    //choice

    /**
     * grupo do detalhamento de Medicamentos e de matérias-primas farmacêuticas
     * @param arg - Branch value assigned to med.
     */
    public med(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).arma);
        delete((this as any).comb);
        (this as any).med = arg;
    }

    //choice

    /**
     * Armamentos
     * @param arg - Branch value assigned to arma.
     */
    public arma(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).med);
        delete((this as any).comb);
        (this as any).arma = arg;
    }

    //choice

    /**
     * Informar apenas para operações com combustíveis líquidos
     * @param arg - Branch value assigned to comb.
     */
    public comb(arg: unknown) {
        delete((this as any).veicProd);
        delete((this as any).med);
        delete((this as any).arma);
        (this as any).comb = arg;
    }

    /**
     * Creates a new schema-backed CPl010CNt2022002V130LeiauteNFeV400Prod instance.
     * Schema context: Dados dos produtos e serviços da NF-e
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPl010CNt2022002V130LeiauteNFeV400Prod) {
        this["@class"] = ".CPl010CNt2022002V130LeiauteNFeV400Prod";


        if (props) {

        	this.gCred = (props.gCred) ? new CPl010CNt2022002V130LeiauteNFeV400GCred(props.gCred): undefined;
        	this.tpCredPresIBSZFM = props.tpCredPresIBSZFM;
        	this.qCom = props.qCom;
        	this.vUnCom = props.vUnCom;
        	this.vProd = props.vProd;
        	this.qTrib = props.qTrib;
        	this.vUnTrib = props.vUnTrib;
        	this.vFrete = props.vFrete;
        	this.vSeg = props.vSeg;
        	this.vDesc = props.vDesc;
        	this.vOutro = props.vOutro;
        	this.CPl010CNt2022002V130LeiauteNFeV400Di = (props.CPl010CNt2022002V130LeiauteNFeV400Di) ? new CPl010CNt2022002V130LeiauteNFeV400Di(props.CPl010CNt2022002V130LeiauteNFeV400Di): undefined;
        	this.detExport = (props.detExport) ? new CPl010CNt2022002V130LeiauteNFeV400DetExport(props.detExport): undefined;
        	this.nFCI = props.nFCI;
        	this.rastro = (props.rastro) ? new CPl010CNt2022002V130LeiauteNFeV400Rastro(props.rastro): undefined;
        	this.infProdNFF = (props.infProdNFF) ? new CPl010CNt2022002V130LeiauteNFeV400InfProdNff(props.infProdNFF): undefined;
        	this.infProdEmb = (props.infProdEmb) ? new CPl010CNt2022002V130LeiauteNFeV400InfProdEmb(props.infProdEmb): undefined;
        }
    }
}
