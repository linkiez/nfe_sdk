import { CPlNFeDistDFe103ResNFeV101ResNFe } from './CPlNFeDistDFe103ResNFeV101ResNFe';

/**
 * Runtime class for CPlNFeDistDFe103ResNFeV101.
 */
export class CPlNFeDistDFe103ResNFeV101 {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de uma NF-e
     */
    public resNFe?: CPlNFeDistDFe103ResNFeV101ResNFe;

    /**
     * Creates a new schema-backed CPlNFeDistDFe103ResNFeV101 instance.
     * Schema context: Runtime class for CPlNFeDistDFe103ResNFeV101.
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNFeDistDFe103ResNFeV101) {
        this["@class"] = ".CPlNFeDistDFe103ResNFeV101";


        if (props) {

        	this.resNFe = (props.resNFe) ? new CPlNFeDistDFe103ResNFeV101ResNFe(props.resNFe): undefined;
        }
    }
}
