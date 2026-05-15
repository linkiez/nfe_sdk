import { CEventoManifestaDestPlV101E210200V100DetEvento } from './CEventoManifestaDestPlV101E210200V100DetEvento';

/**
 * Runtime class for CEventoManifestaDestPlV101E210200V100.
 */
export class CEventoManifestaDestPlV101E210200V100 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema XML de validação do evento da confirmação de recebimento
     */
    public detEvento?: CEventoManifestaDestPlV101E210200V100DetEvento;

    /**
     * Creates a new schema-backed CEventoManifestaDestPlV101E210200V100 instance.
     * Schema context: Runtime class for CEventoManifestaDestPlV101E210200V100.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoManifestaDestPlV101E210200V100) {
        this["@class"] = ".CEventoManifestaDestPlV101E210200V100";


        if (props) {

        	this.detEvento = (props.detEvento) ? new CEventoManifestaDestPlV101E210200V100DetEvento(props.detEvento): undefined;
        }
    }
}
