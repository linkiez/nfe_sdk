import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento } from './CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo Evento
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Referenced or wildcard schema content not fully resolved by the generator.
     */
    public unknown?: unknown;
    /**
     * Identificação do Ambiente: 1 - Produção 2 - Homologação
     */
    public infEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
    /**
     * Tipo Versão do Evento
     */
    public $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento instance.
     * Schema context: Tipo Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
