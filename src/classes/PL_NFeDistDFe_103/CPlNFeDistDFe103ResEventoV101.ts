import { CPlNFeDistDFe103ResEventoV101ResEvento } from './CPlNFeDistDFe103ResEventoV101ResEvento';

/**
 * Runtime class for CPlNFeDistDFe103ResEventoV101.
 */
export class CPlNFeDistDFe103ResEventoV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de um evento de NF-e
     */
    public resEvento?: CPlNFeDistDFe103ResEventoV101ResEvento;

    /**
     * Creates a new schema-backed CPlNFeDistDFe103ResEventoV101 instance.
     * Schema context: Runtime class for CPlNFeDistDFe103ResEventoV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103ResEventoV101) {
        this["@class"] = ".CPlNFeDistDFe103ResEventoV101";


        if (props) {

        	this.resEvento = (props.resEvento) ? new CPlNFeDistDFe103ResEventoV101ResEvento(props.resEvento): undefined;
        }
    }
}
