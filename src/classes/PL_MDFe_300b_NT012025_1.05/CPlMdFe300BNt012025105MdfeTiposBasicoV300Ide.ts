import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300ModalMd } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300ModalMd';

/**
 * Identificação do MDF-e
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código da UF do emitente do MDF-e Código da UF do emitente do Documento Fiscal. Utilizar a Tabela do IBGE de código de unidades da federação.
   */
  public cUF?: unknown;
  /**
   * Tipo do Ambiente 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Tipo do Emitente 1 - Prestador de serviço de transporte 2 - Transportador de Carga Própria 3 - Prestador de serviço de transporte que emitirá CT-e Globalizado OBS: Deve ser preenchido com 2 para emitentes de NF-e e pelas transportadoras quando estiverem fazendo transporte de carga própria. Deve ser preenchido com 3 para transportador de carga que emitirá à posteriori CT-e Globalizado relacionando as NF-e.
   */
  public tpEmit?: unknown;
  /**
   * Tipo do Transportador 1 - ETC 2 - TAC 3 - CTC
   */
  public tpTransp?: unknown;
  /**
   * Modelo do Manifesto Eletrônico Utilizar o código 58 para identificação do MDF-e
   */
  public mod?: unknown;
  /**
   * Série do Manifesto Informar a série do documento fiscal (informar zero se inexistente). Série na faixa [920-969]: Reservada para emissão por contribuinte pessoa física com inscrição estadual.
   */
  public serie?: unknown;
  /**
   * Número do Manifesto Número que identifica o Manifesto. 1 a 999999999.
   */
  public nMDF?: unknown;
  /**
   * Modalidade de transporte 1 - Rodoviário; 2 - Aéreo; 3 - Aquaviário; 4 - Ferroviário.
   */
  public modal?: TPlMdFe300BNt012025105MdfeTiposBasicoV300ModalMd;
  /**
   * Data e hora de emissão do Manifesto Formato AAAA-MM-DDTHH:MM:DD TZD
   */
  public dhEmi?: unknown;
  /**
   * Sigla da UF do Carregamento Utilizar a Tabela do IBGE de código de unidades da federação. Informar 'EX' para operações com o exterior.
   */
  public UFIni?: unknown;
  /**
   * Sigla da UF do Descarregamento Utilizar a Tabela do IBGE de código de unidades da federação. Informar 'EX' para operações com o exterior.
   */
  public UFFim?: unknown;
  /**
   * Nome do Município de Carregamento
   */
  public infMunCarrega?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega;
  /**
   * Sigla das Unidades da Federação do percurso do veículo.
   */
  public infPercurso?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso;
  /**
   * Data e hora previstos de inicio da viagem Formato AAAA-MM-DDTHH:MM:DD TZD
   */
  public dhIniViagem?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide instance.
   * Schema context: Identificação do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide';

    if (props) {
      assignSchemaProperties(this, props, [
        'cUF',
        'tpAmb',
        'tpEmit',
        'tpTransp',
        'mod',
        'serie',
        'nMDF',
        'modal',
        'dhEmi',
        'UFIni',
        'UFFim',
      ]);
      this.infMunCarrega = props.infMunCarrega
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega(
            props.infMunCarrega,
          )
        : undefined;
      this.infPercurso = props.infPercurso
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso(
            props.infPercurso,
          )
        : undefined;
      assignSchemaProperties(this, props, ['dhIniViagem']);
    }
  }
}
