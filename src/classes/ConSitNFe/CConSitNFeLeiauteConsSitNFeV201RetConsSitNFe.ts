import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CConSitNFeLeiauteConsSitNFeV201ProcEvento } from './CConSitNFeLeiauteConsSitNFeV201ProcEvento';

import { CConSitNFeLeiauteConsSitNFeV201ProtNFe } from './CConSitNFeLeiauteConsSitNFeV201ProtNFe';

import { CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107 } from './CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107';

import { TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
 */
export class CConSitNFeLeiauteConsSitNFeV201RetConsSitNFe {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Versão do Aplicativo que processou a NF-e
     */
    public verAplic?: unknown;
    /**
     * Código do status da mensagem enviada.
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do serviço solicitado.
     */
    public xMotivo?: unknown;
    /**
     * código da UF de atendimento
     */
    public cUF?: unknown;
    /**
     * Chaves de acesso da NF-e consultada
     */
    public chNFe?: unknown;
    /**
     * Protocolo de autorização de uso da NF-e
     */
    public protNFe?: CConSitNFeLeiauteConsSitNFeV201ProtNFe;
    /**
     * Protocolo de homologação de cancelamento de uso da NF-e
     */
    public retCancNFe?: CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107;
    /**
     * Protocolo de registro de evento da NF-e
     */
    public procEventoNFe?: CConSitNFeLeiauteConsSitNFeV201ProcEvento[];
    /**
     * Tipo Versão do Leiaute da Cosulta situação NF-e - 2.01
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerConsSitNFe;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201RetConsSitNFe instance.
     * Schema context: Tipo Retorno de Pedido de Consulta da Situação Atual da Nota Fiscal Eletrônica
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201RetConsSitNFe) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201RetConsSitNFe";


        if (props) {

            assignSchemaProperties(this, props, ["tpAmb", "verAplic", "cStat", "xMotivo", "cUF", "chNFe"]);
        	this.protNFe = (props.protNFe) ? new CConSitNFeLeiauteConsSitNFeV201ProtNFe(props.protNFe): undefined;
        	this.retCancNFe = (props.retCancNFe) ? new CConSitNFeLeiauteConsSitNFeV201RetCancNFeV200107(props.retCancNFe): undefined;
        	this.procEventoNFe = props.procEventoNFe?.map(o => new CConSitNFeLeiauteConsSitNFeV201ProcEvento(o));
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
