import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento } from './CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export class CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Tipo Evento
     */
    public evento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento;
    /**
     * Tipo Versão do EnvEvento
     */
    public $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;

    /**
     * Creates a new schema-backed CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100EnvEvento instance.
     * Schema context: Tipo Lote de Envio
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100EnvEvento) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100EnvEvento";


        if (props) {

        	this.evento = (props.evento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento(props.evento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
