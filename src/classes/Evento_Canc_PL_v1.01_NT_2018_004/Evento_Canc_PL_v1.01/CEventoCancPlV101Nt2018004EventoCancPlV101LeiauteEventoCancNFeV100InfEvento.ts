import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100DetEvento } from './CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100DetEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
     */
    public cOrgao?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public tpAmb?: unknown;
    /**
     * Chave de Acesso NF-e vinculada
     */
    public chNFe?: unknown;
    /**
     * Schema property dh Evento.
     */
    public dhEvento?: unknown;
    /**
     * Schema XML de validação do evento do cancelamento 1101111
     */
    public detEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100DetEvento;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Código do status da registro do Evento
     */
    public cStat?: unknown;
    /**
     * Descrição literal do status do registro do Evento
     */
    public xMotivo?: unknown;
    /**
     * Número do protocolo de registro do evento
     */
    public nProt?: unknown;

    //choice

    /**
     * CNPJ Destinatário
     * @param arg - Branch value assigned to CNPJDest.
     */
    public CNPJDest(arg: unknown) {
        delete((this as any).CPFDest);
        (this as any).CNPJDest = arg;
    }

    //choice

    /**
     * CPF Destiantário
     * @param arg - Branch value assigned to CPFDest.
     */
    public CPFDest(arg: unknown) {
        delete((this as any).CNPJDest);
        (this as any).CPFDest = arg;
    }

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento instance.
     * Schema context: Identificação do Ambiente: 1 - Produção 2 - Homologação
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgao", "tpAmb", "chNFe", "dhEvento"]);
        	this.detEvento = (props.detEvento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100DetEvento(props.detEvento): undefined;
            assignSchemaProperties(this, props, ["verAplic", "cStat", "xMotivo", "nProt"]);
        }
    }
}
