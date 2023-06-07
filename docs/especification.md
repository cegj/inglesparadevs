# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

Mateus Alencar tem 20 anos, recém-formado em Análise e Desenvolvimento de Sistemas. Trabalha como Desenvolvedor Júnior em uma startup, Mateus tem um bom conhecimento técnico em sua área, contudo sente como um fator limitante de crescimento profissional o fato de não possuir amplo conhecimento na língua inglesa. Recentemente uma empresa do exterior notou Mateus e, com isso, fez um convite para Mateus participar do processo seletivo, sendo o processo  mandatoriamente em inglês. Mateus não possui um currículo em inglês e nem um plano ou cronograma de como se preparar para as entrevistas de emprego, dificutando assim as suas chances de ser contratado. 

Pedro Soares tem 24 anos, é formado em Ciência da Computação e trabalha em uma empresa multinacional como Desenvolvedor Sênior, consegue ler textos e documentações em inglês, mas na hora de falar, se sente inseguro e já perdeu oportunidades por conta disso. Vendo que as pessoas nos cargos mais altos da empresa em que trabalha falam inglês fluentemente e fazem uso disso no dia a dia, gerenciando equipes de diversos locais do mundo, Pedro decidiu buscar formas de melhorar seu inglês pela internet para continuar subindo em sua carreira profissional.

Fernanda Oliveira tem 29 anos, é graduada em Sistemas de Informação e é Desenvolvedora Web Front-End há 8 anos, possui um sólido conhecimento técnico desenvolvido durante sua carreira trabalhando em uma empresa multinacional e consegue se comunicar tranquilamente em inglês. Fernanda busca atualmente um certificado para comprovar sua proeficiência no idioma para se candidatar para uma vaga de coordenadora de projetos em uma unidade no Canadá da empresa que ela trabalha. Com isso, está procurando informações sobre exames de proeficiência no idioma. 

João tem 29 anos, formado em Ciências da Computação pela UFF, está no mercado de trabalho a 6 anos como Analista de Sistemas Pleno, percebeu que seu desenvolvimento na empresa estagnou, procurando novos empregos para continuar sua evolução em sua carreira viu que haviam muitas propostas para desenvolvedores fora do país do qual reside, porém o inglês fluente era necessário principalmente para concorrer a uma vaga e seu nível de inglês era intermediário e quase não se comunicava em inglês, conhecendo sua deficiência e verificando seu nível de proeficiência em um site, ele buscou por materiais de apoio e aulas de conversação, dicas com amigos pois não conseguiria concorrer para tais vagas.

Pedro 25 anos é desenvolvedor de aplicações bancárias. Seu trabalho foi notado por outras empresas buscando mão de obra especializada para tal, recebendo inúmeras propostas. Havia dentre elas, ofertas para trabalhar no exterior, animado pela oportunidade foi agendado uma entrevista, durante a entrevista foram avaliados os seguintes pontos: comunicação e parte técnica. Sua parte técnica foi impecável porém sua comunicação em inglês foi um desastre perdendo a oportunidade de qualificação para este emprego. Pedro vendo que perdeu tal vaga devido ao seu nível de inglês, decidiu se aprimorar buscando cursos de inglês presenciais, porém seu horário de trabalho deixava isto exaustivo, optando por estudar online e procurar sites que o ajudasse a se desenvolver, e assim conseguir uma colocação melhor no mercado.

Camila tem 24 anos, é estudante de Engenharia de Software e trabalha como estagiária no setor de dados de uma multinacional. O contrato de estágio dela finalizará em um ano e o objetivo principal é ser contratada pela empresa. Em uma conversa com sua coordenadora, Camila foi informada que um dos requisitos para ser promovida é ter um nível de inglês intermediário. Após alguns anos fazendo curso de idiomas, ela entendeu que apesar de ter um nível de inglês intermediário, precisa focar principalmente no vocabulário técnico, e para isso decidiu recorrer a materiais de apoio para o aprendizado e aperfeiçoamento da língua.

Anelio Finelli tem 25 anos, sua formação é em Sistema de Informação e trabalha em uma empresa de Fortaleza na área de infraestrutura. Com uma certa dificuldade ele consegue ler e escrever algumas coisas em inglês. Contudo, tem muita dificuldade em falar inglês, diminuindo as oportunidades de emprego pra ele, tendo em vista que muitas empresas exigiam o inglês para contratação. Sabendo disso, Anelio sentiu a necessidade de aprimorar o seu inglês, fazendo com que suas possibilidades de crescer na área aumentassem bastante.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                      |PARA ... `MOTIVO/VALOR`                                         |
|--------------------|---------------------------------------------------------|----------------------------------------------------------------|
|Usuário do sistema  | Criar planos de estudos                                 | Monitorar meu progresso nos estudos                            |
|Usuário do sistema  | Seguir planos de estudos publicados por outros usuários | Conseguir iniciar meus estudos mesmo sem saber montar um plano |
|Usuário do sistema  | Ter facilidade de acesso ao meu plano de estudo         | Visualizar meu plano de estudo independente de horário e localização|
|Usuário do sistema  | Ter acesso a vocabulários, exercícios e planos de estudos| Aperfeiçoar o inglês                                           |
|Usuário do sistema  | Ter um direcionamento e ajuda para as entrevistas       | Para conquistar uma vaga de emprego no exterior                |
|Usuário do sistema  | Aprofundar o conhecimento na língua inglesa             | Para estar mais preparado perante as oportunidades             |
|Usuário do sistema  | Preciso de informações sobre exames de proeficiência    | Para realizar o exame e conquistar o certificado               |
|Usuário do sistema  | Adquirir mais conhecimento na língua inglesa   | Para conquistar a fluência no idioma             |
|Usuário do sistema  | Me instruir melhor para o mercado de trabalho         |Estar mais preparado para as oportunidades de trabalho dentro e fora do        Brasil| 
|Usuário do sistema  | Facilitar meu meio de aprendizagem                      | Tornar mais fácil e mais leve a aprendizagem                   |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  |     Prioridade     |
|------|-----------------------------------------|----|
|RF-001| Cadastro de usuários                    | ALTA | 
|RF-002| Página com dicas e links sobre exames de proficiência   | ALTA |
|RF-003| Teste para verificar seu nível de inglês | MÉDIA |
|RF-004| Dicionário com termos mais usados no cotidiano dos desenvolvedores | MÉDIA |
|RF-005| Gestão de planos de estudo | ALTA |
|RF-006| Fórum de dúvidas | MÉDIA |
|RF-007| Comentários e curtidas em cada plano de estudo | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Somente o usuário terá acesso aos seus dados pessoais |ALTA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                     |
|--|---------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre         |
|02| Não pode ser desenvolvido um módulo de backend                |
|03| O front-end não pode ser desenvolvido usando frameworks       |
