import { assignSchemaProperties } from '../../../canonical/shared/assign-schema-properties';
/**
 * Schema XML de validação do evento do cancelamento por substituição 110112
 */
export class CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100DetEvento {
    /**
     * Runtime class discriminator.
     */
    public "@class"?: string;

    /**
     * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
     */
    public cOrgaoAutor?: unknown;
    /**
     * Versão do Aplicativo que recebeu o Evento
     */
    public verAplic?: unknown;
    /**
     * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 posições ano; 10 seqüencial no ano.
     */
    public nProt?: unknown;
    /**
     * Justificativa do cancelamento
     */
    public xJust?: unknown;
    /**
     * Chave de Acesso NF-e vinculada
     */
    public chNFeRef?: unknown;

    /**
     * Creates a new schema-backed CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100DetEvento instance.
     * Schema context: Schema XML de validação do evento do cancelamento por substituição 110112
     * @param props - Initial schema-backed values used to populate the instance.
     */
    public constructor(props?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100DetEvento) {
        this["@class"] = ".CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100DetEvento";


        if (props) {

            assignSchemaProperties(this, props, ["cOrgaoAutor", "verAplic", "nProt", "xJust", "chNFeRef"]);
        }
    }
}
