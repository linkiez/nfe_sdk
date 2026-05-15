import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100EnteGov } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100EnteGov';

import { TPlNfAg100JDFeTiposBasicosV100OperCompraGov } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100OperCompraGov';

/**
 * Tipo Compras Governamentais
 */
export class CPlNfAg100JDFeTiposBasicosV100CompraGov {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Para administração pública direta e suas autarquias e fundações: 1=União 2=Estados 3=Distrito Federal 4=Municípios 5=Consórcio Público 6=Comitê Gestor do IBS
     */
    public tpEnteGov?: TPlNfAg100JDFeTiposBasicosV100EnteGov;
    /**
     * Percentual de redução de aliquota em compra governamental
     */
    public pRedutor?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
    /**
     * Tipo da operação com ente governamental: 1 – Fornecimento com pagamento posterior; 2 - Recebimento do pagamento com fornecimento já realizado; 3 – Fornecimento com pagamento já realizado; 4 – Recebimento do pagamento com fornecimento posterior;
     */
    public tpOperGov?: TPlNfAg100JDFeTiposBasicosV100OperCompraGov;

    /**
     * Creates a new schema-backed CPlNfAg100JDFeTiposBasicosV100CompraGov instance.
     * Schema context: Tipo Compras Governamentais
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CPlNfAg100JDFeTiposBasicosV100CompraGov) {
        this["@class"] = ".CPlNfAg100JDFeTiposBasicosV100CompraGov";


        if (props) {

        	this.tpEnteGov = props.tpEnteGov;
        	this.pRedutor = props.pRedutor;
        	this.tpOperGov = props.tpOperGov;
        }
    }
}
