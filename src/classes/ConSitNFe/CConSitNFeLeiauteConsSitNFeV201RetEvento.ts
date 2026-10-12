import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CConSitNFeLeiauteConsSitNFeV201InfEvento } from './CConSitNFeLeiauteConsSitNFeV201InfEvento';

import { TConSitNFeLeiauteConsSitNFeV201VerEvento } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201VerEvento';

/**
 * Tipo retorno do Evento
 */
export class CConSitNFeLeiauteConsSitNFeV201RetEvento {
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
    public infEvento?: CConSitNFeLeiauteConsSitNFeV201InfEvento;
    /**
     * Tipo Versão do Evento 1.00
     */
    public $versao?: TConSitNFeLeiauteConsSitNFeV201VerEvento;

    /**
     * Creates a new schema-backed CConSitNFeLeiauteConsSitNFeV201RetEvento instance.
     * Schema context: Tipo retorno do Evento
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CConSitNFeLeiauteConsSitNFeV201RetEvento) {
        this["@class"] = ".CConSitNFeLeiauteConsSitNFeV201RetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["unknown"]);
        	this.infEvento = (props.infEvento) ? new CConSitNFeLeiauteConsSitNFeV201InfEvento(props.infEvento): undefined;
            assignSchemaProperties(this, props, ["$versao"]);
        }
    }
}
