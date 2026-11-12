# [1.1.0](https://github.com/linkiez/nfe_sdk/compare/v1.0.1...v1.1.0) (2026-11-12)


### Features

* **mdfe:** adicionar suporte a MDF-e ([0dd745c](https://github.com/linkiez/nfe_sdk/commit/0dd745c22054a94740ba909a21a14c49c9da88cd))

## [1.0.1](https://github.com/linkiez/nfe_sdk/compare/v1.0.0...v1.0.1) (2026-11-11)


### Bug Fixes

* **ci:** autenticar publicação do pacote no GitHub Packages ([27e396e](https://github.com/linkiez/nfe_sdk/commit/27e396ec138c19d0b9a83fee4af623dfde709656))

# 1.0.0 (2026-11-11)


* feat!: redefinir contrato publico minimo do pacote ([9ea02b0](https://github.com/linkiez/nfe_sdk/commit/9ea02b0801ed8a1378c0dd79bbda1ef573459024))
* feat(generator)!: reorganizar geracao TypeScript em categorias ([aedfb82](https://github.com/linkiez/nfe_sdk/commit/aedfb82644ac0056f59404ba96a8660546e1b223))


### Bug Fixes

* **ci:** instalar Chromium no workflow de publicacao ([77346d7](https://github.com/linkiez/nfe_sdk/commit/77346d7861dde2b1dbbc587f3b1f3390c1e09f3e))
* **ci:** instalar Chromium para testes Playwright ([41e7746](https://github.com/linkiez/nfe_sdk/commit/41e774644b46e5c5a7606055566dbfe0a00e39a1))
* **nfce:** validar entradas e esclarecer QR Code SP ([8511188](https://github.com/linkiez/nfe_sdk/commit/851118807b79e3fcfa8d53ad2a6c630c92bb9608))
* reduzir duplicação nos construtores gerados ([542755a](https://github.com/linkiez/nfe_sdk/commit/542755a2442c55631f1cb1bffc5ed628f601a68a))
* **test:** incluir ts-node para carregar configuração do Jest ([195bd27](https://github.com/linkiez/nfe_sdk/commit/195bd27efc965722d9d731527d2a9336cf482c08))


### Features

* adicionar assinatura digital e transporte SOAP ([af6f0f3](https://github.com/linkiez/nfe_sdk/commit/af6f0f3af26f47c7c6a97ca11f8b5c6ff3fa6445))
* adicionar plano de implementação para gaps do roadmap gap audit (012) ([a2e2540](https://github.com/linkiez/nfe_sdk/commit/a2e25402f0f853668ba02fee92228e4122ff2b2e))
* adicionar reconciliacao publica por recibo nfe ([1bf631e](https://github.com/linkiez/nfe_sdk/commit/1bf631e401c478adf6155dd9cf26728d83423846))
* adicionar slice inicial de nfce e alinhar lacunas do roadmap ([7317612](https://github.com/linkiez/nfe_sdk/commit/731761264873d343e25d7893f8c7ee8a87104085))
* adicionar slice recipient dfe ([2b3eb65](https://github.com/linkiez/nfe_sdk/commit/2b3eb656192dd1805a73aeb95a3af314fd12a1fb))
* **contingencia:** implementar boundaries observaveis de svc ([bff3042](https://github.com/linkiez/nfe_sdk/commit/bff30420d5e051bc99400af8be2df9b032776a2f))
* criar especificação de implementação das gaps do roadmap gap audit (012-implement-audit-gaps) ([921aed9](https://github.com/linkiez/nfe_sdk/commit/921aed948c8a01ca5284f04439abf8eab29c0273))
* **docs:** adicionar crawler de fontes oficiais ([c292801](https://github.com/linkiez/nfe_sdk/commit/c292801fcd8a5962b37c4897beab639638e2e4f3))
* endurecer validacao de release e adocao do pacote ([22f204a](https://github.com/linkiez/nfe_sdk/commit/22f204ab5a638ca3b0a46413f625bc8447773f24))
* expandir cobertura de assinatura e reorganizar roadmap ([448fb32](https://github.com/linkiez/nfe_sdk/commit/448fb324c13193998e42ceae257d1835daeadcb7))
* **generic-event:** implementar facade root de eventos genericos ([885a9f4](https://github.com/linkiez/nfe_sdk/commit/885a9f4dcf197fde744358a0a42a860d87f7633e))
* gerar lista de tarefas para implementação das gaps do roadmap (012-implement-audit-gaps) ([752aa4e](https://github.com/linkiez/nfe_sdk/commit/752aa4e96d6f781f602f8c7972c1926946d3bf4e))
* implement nfe state operations slice ([d732c16](https://github.com/linkiez/nfe_sdk/commit/d732c1689d85e3c6463125d8f4fae3469cfe6a11))
* implement recipient continuity slice ([8e4c208](https://github.com/linkiez/nfe_sdk/commit/8e4c208ef2ea4de3961c23a1071ba67b970b0686))
* implementa estrutura canonica de NFe, facade funcional e serializacao XML ([c17c92b](https://github.com/linkiez/nfe_sdk/commit/c17c92bdfbf080394a2a9ceea4e689986429b868))
* implementar MVP operacional da NF-e ([70a28d8](https://github.com/linkiez/nfe_sdk/commit/70a28d871ffde4e740854c8114dd65dd753c6460))
* implementar validação XSD, suporte e-CPF, prorrogação ICMS e extensões de destinatário ([19466e0](https://github.com/linkiez/nfe_sdk/commit/19466e067d9d58346658307ddc83b1af53c72044))
* inicializar conversor de schemas para typescript ([76f893b](https://github.com/linkiez/nfe_sdk/commit/76f893bc74208aa54591c7fe0cf6b8af5e18daa9))
* **nfce:** adicionar geração de QR Code da NFC-e de SP ([4221f70](https://github.com/linkiez/nfe_sdk/commit/4221f70326b8c44592985e40dd96dc5bb5f91bc6))
* **nfce:** autorizar NFC-e de SP em produção ([aa79d2c](https://github.com/linkiez/nfe_sdk/commit/aa79d2cef488606c2e7bc50a6185984d8362c112))
* **nfce:** fechar slice de promocao pr ([206fb70](https://github.com/linkiez/nfe_sdk/commit/206fb709f98e482b3cb04f3159c60bb3624a7615))
* **nfce:** implementar contingência offline e DANFE SP ([a31ad50](https://github.com/linkiez/nfe_sdk/commit/a31ad50a1cf3fa0ebf8603a0334d6c99d4c7722c))
* **nfe:** adicionar contingência SP e recuperação explícita ([b871333](https://github.com/linkiez/nfe_sdk/commit/b87133388427fb6c66eb8b8dd9ce69d8ff20cce9))
* **nfe:** autorizar NF-e SP em producao ([083780b](https://github.com/linkiez/nfe_sdk/commit/083780bffb19993f4fb82e75192f56b85d0569d5))
* **nfe:** completar operações fiscais canônicas ([3ef2d2a](https://github.com/linkiez/nfe_sdk/commit/3ef2d2a3a8645d239bbef0acfa1b01bc98566d01))
* **nfe:** reconciliar recibos SP em producao ([8332bc9](https://github.com/linkiez/nfe_sdk/commit/8332bc90e50a0e1ed3bca94b15d6faf1d19fef79))
* promover cobertura operacional de nfce para pr ([50ea9e5](https://github.com/linkiez/nfe_sdk/commit/50ea9e5f5f83592d5c72875b3ca49f9cb61f77a7))
* **transport:** rotear autorizacao SP em producao ([f5b9e3b](https://github.com/linkiez/nfe_sdk/commit/f5b9e3b1767037f0be7c21f5964bf3bb630b1068))


### BREAKING CHANGES

* o import raiz do pacote deixa de reexportar a arvore gerada e passa a publicar apenas publicPackageContract.
* o layout publico dos arquivos gerados mudou de pastas por schema para categorias na raiz de src. Migracao: atualizar imports que apontavam para caminhos antigos para os novos caminhos em src/classes, src/interfaces, src/types e src/enums.
