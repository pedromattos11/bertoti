# Pedro Mattos

## INTRODUÇÃO
Sou profissional da área de Dados e Inteligência Artificial, atualmente cursando Tecnólogo em Banco de Dados na FATEC de São José dos Campos e com formação técnica em Desenvolvimento de Software. Com uma trajetória construída no ambiente industrial, possuo dois anos de experiência em processos de manufatura na Johnson & Johnson e, atualmente, atuo como estagiário de IA & Data na Embraer. Meu foco de trabalho e estudo está concentrado no ecossistema da Indústria 4.0, envolvendo o desenvolvimento de soluções com visão computacional, monitoramento de dados de máquinas em tempo real e realidade estendida, unindo os fundamentos teóricos de dados à prática direta no chão de fábrica.

## CONTATO
* **LinkedIn:** [Pedro Mattos](https://www.linkedin.com/in/pedro-mattos-09b7271b4/)
* **GitHub:** [@pedromattos11](https://github.com/pedromattos11)
* **E-mail:** [Email-Me](mailto:pedro.hmattos19@gmail.com)

## PRINCIPAIS CONHECIMENTOS
* **Inteligência Artificial & Dados:** Visão Computacional, Modelos de IA, Monitoramento de Dados em Tempo Real e Indústria 4.0.
* **Banco de Dados:** Modelagem de Dados, SQL, MySQL, PostgreSQL e Oracle Database.
* **Desenvolvimento & Front-End:** JavaScript, HTML5, CSS3, estruturação de interfaces web e prototipagem.
* **Controle de Versão & DevOps:** Git, GitHub e deploy contínuo (Vercel).
* **Idiomas:** Português (Nativo), Inglês, Espanhol.

---

## PROJETO 2025-2 (3º SEMESTRE — ALTAVE)

### O PROBLEMA
A empresa **Altave Intelligent Monitoring**, referência em monitoramento remoto inteligente, necessitava de uma solução para centralizar e estruturar o gerenciamento do capital humano interno. O desafio era mapear, de forma organizada e consultável, as habilidades técnicas (hard skills), competências comportamentais (soft skills), certificações, formações acadêmicas e históricos profissionais de seus colaboradores. A ausência de um sistema unificado dificultava a identificação ágil de talentos internos para novas oportunidades e a realocação eficiente de profissionais em projetos específicos.

### SOLUÇÃO ENTREGUE PELA EQUIPE
Desenvolvimento de uma **plataforma desktop de gestão de talentos**, nos moldes de uma rede profissional corporativa interna, voltada à otimização do capital humano da Altave. A aplicação permite que colaboradores atualizem seus perfis com qualificações e históricos profissionais, enquanto diretores e supervisores podem realizar avaliações, registrar recomendações e filtrar profissionais por competências específicas. O sistema foi construído inteiramente em Java, com interface gráfica nativa via JavaFX e persistência de dados em banco relacional MySQL.

### REPOSITÓRIO
* **Repositório do Projeto:** [LegacyTech — 3º Semestre](https://github.com/LegacyTec)

### TECNOLOGIAS

| Tecnologia | Utilização |
| :--- | :--- |
| **Java 17** | Linguagem principal de desenvolvimento, responsável por toda a lógica de negócio e regras de acesso da aplicação. |
| **JavaFX** | Framework utilizado para a construção da interface gráfica desktop (GUI), com telas de login, cadastro de colaboradores e painel de perfil profissional. |
| **MySQL 8** | Banco de dados relacional utilizado para persistência de dados dos colaboradores, competências, certificações e históricos profissionais. |
| **JDBC** | Conector utilizado para a integração entre a aplicação Java e o banco de dados MySQL, gerenciando queries e transações. |
| **Git & GitHub** | Controle de versão distribuído, gerenciamento de branches de desenvolvimento e governança colaborativa do código-fonte. |

### CONTRIBUIÇÕES INDIVIDUAIS

Atuei como **Product Owner** da equipe LegacyTech, sendo responsável pela interface entre o cliente Altave e o time de desenvolvimento:

* **Product Owner:** Definição e priorização do Product Backlog, refinamento de User Stories e alinhamento constante com os requisitos do cliente ao longo das sprints.
* **Desenvolvimento de Interface (JavaFX):** Criação de telas essenciais do sistema, incluindo autenticação (login), formulário de cadastro de colaboradores e painel de visualização de perfil profissional.
* **Controle de Acessos:** Implementação de lógica de permissões diferenciando os níveis de acesso entre colaboradores gerais, supervisores e diretores.
* **Modelagem de Dados:** Colaboração na definição do esquema do banco MySQL, estabelecendo chaves primárias, estrangeiras e relacionamentos para suportar o histórico de competências dos colaboradores.

---

## PROJETO 2026-1 (4º SEMESTRE — ALTAVE)

### O PROBLEMA
Dando continuidade à parceria com a **Altave Intelligent Monitoring**, o desafio deste semestre foi de natureza operacional: a empresa realizava o controle manual de aproximadamente 100 sistemas de monitoramento distribuídos globalmente (embarcações, plataformas offshore, fábricas), o que gerava falta de visibilidade sobre histórico de manutenções, agendamentos preventivos e a logística complexa de alocação de técnicos especializados em campo.

### SOLUÇÃO ENTREGUE PELA EQUIPE
Desenvolvimento de um **Sistema Web de Gestão de Manutenções (SGM)**, cobrindo o ciclo completo de manutenções preventivas e corretivas dos ativos da Altave. A plataforma centraliza o planejamento de ordens de serviço, a alocação de técnicos por competência, o preenchimento de checklists dinâmicos de execução, o controle logístico de ferramentas e viagens, e a visualização geográfica dos ativos em mapa interativo. O sistema foi construído com arquitetura desacoplada (backend API REST + frontend SPA), com deploy em cloud para acesso remoto pelas equipes de campo.

### REPOSITÓRIO
* **Repositório do Projeto:** [LegacyTech — 4º Semestre](https://github.com/LegacyTec/4Sem2026-1#)
* **Hospedagem do Sistema (Frontend):** [Altave SGM no Vercel](https://4-sem2026-1.vercel.app)

### TECNOLOGIAS

| Tecnologia | Utilização |
| :--- | :--- |
| **Java 17 + Spring Boot 3** | Desenvolvimento da API REST do backend, com Spring Data JPA/Hibernate para persistência e Spring Security para autenticação e controle de acesso. |
| **MySQL 8** | Banco de dados relacional para armazenamento de ativos, ordens de manutenção, checklists, técnicos e histórico de intervenções. |
| **Vue.js 3** | Framework JavaScript progressivo utilizado para a construção da interface web (SPA), com componentes reativos e navegação via Vue Router. |
| **Tailwind CSS** | Framework utilitário de estilização CSS, garantindo design responsivo e consistente sem escrever CSS customizado. |
| **Axios** | Biblioteca utilizada no frontend para consumo da API REST do backend via requisições HTTP assíncronas. |
| **Leaflet** | Biblioteca de mapas interativos utilizada para a visualização geográfica dos ativos e técnicos em tempo real (RF04). |
| **Figma** | Ferramenta de design utilizada para prototipagem das telas e fluxos de navegação (UI/UX) antes da codificação. |
| **Git & GitHub** | Controle de versão com GitFlow simplificado: branches `main`, `sprint-N` e `feature/nome`, com Conventional Commits padronizados. |
| **Vercel** | Plataforma de cloud utilizada para o deploy automatizado e hospedagem pública do frontend Vue.js, com pipeline integrado ao GitHub. |
| **Railway** | Plataforma de cloud utilizada para o deploy e hospedagem do backend Spring Boot, com provisionamento do banco de dados MySQL em ambiente de produção. |

### CONTRIBUIÇÕES INDIVIDUAIS

Atuei novamente como **Product Owner** da equipe LegacyTech, além de contribuir diretamente no desenvolvimento front-end, modelagem de dados e infraestrutura de deploy:

* **Product Owner:** Priorização e gestão do Product Backlog com 8 User Stories distribuídas em 3 sprints, condução das cerimônias ágeis e apresentações de Sprint Review ao cliente Altave.
* **Desenvolvimento Front-End (Vue.js 3):** Criação de telas do sistema, incluindo autenticação, listagem e detalhamento de ordens de manutenção, formulários de checklist e painel de controle logístico.
* **Controle de Acessos e Regras de Negócio:** Implementação de lógica de permissões no frontend diferenciando gestores e técnicos de campo.
* **Prototipagem no Figma:** Elaboração de wireframes de alta fidelidade e fluxos de navegação antes do início da codificação.
* **Modelagem e Estrutura de Dados:** Definição do esquema do banco MySQL, relacionamentos entre entidades (ativos, manutenções, técnicos, checklists, contratos) e dicionário de dados.
* **Pipeline de Deploy:** Configuração do deploy contínuo do frontend na Vercel (integrado ao GitHub) e acompanhamento do ambiente backend no Railway, garantindo disponibilidade do sistema para validações com o cliente.

---

## HARD SKILLS

* **Desenvolvimento Front-End & Prototipagem:** Domínio na criação de componentes de interface reutilizáveis com JavaScript/Vue.js e estruturação arquitetural com foco em usabilidade e fidelidade aos requisitos do cliente.
* **Gerenciamento de Deploy (Vercel / Railway):** Capacidade de configurar pipelines de deploy contínuo a partir de repositórios remotos, viabilizando ambientes estáveis de homologação e produção web.
* **Controle de Versão Avançado (Git/GitHub):** Utilização rigorosa de boas práticas de versionamento com GitFlow simplificado, gerenciamento de branches de funcionalidades, Conventional Commits e resolução de conflitos em equipe.
* **Modelagem de Dados e Processos:** Habilidade em traduzir regras de negócios complexas do ambiente corporativo/industrial em modelos lógicos de dados consistentes e performáticos (MySQL, PostgreSQL, Oracle).

---

## SOFT SKILLS

* **Pensamento Analítico:** Capacidade de decompor os problemas operacionais trazidos pela Altave e estruturar soluções técnicas eficientes na camada de interface e de persistência de dados.
* **Comunicação Técnica e Assertiva:** Participação ativa em reuniões de alinhamento e tomadas de decisão, garantindo clareza na divisão de tarefas e mantendo a documentação e o versionamento do projeto perfeitamente transparentes para o time.
* **Adaptabilidade:** Prontidão para ajustar rotas de desenvolvimento, realizar refatorações de código e alterar o fluxo de telas conforme novas prioridades ou refinamentos de escopo eram apresentados pelo cliente.
* **Aprendizado Contínuo:** Capacidade de absorver e aplicar rapidamente novas tecnologias, padrões de projeto e ferramentas necessárias para o cumprimento dos marcos de entrega acadêmicos e profissionais.
