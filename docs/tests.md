# Plano de Testes de Software

# Requisitos Funcionais e Não Funcionais

| Tipo de Teste      |               Funcionalidade                         |        Requesitos que Motivaram o Teste                                         |
|--------------------|---------------------------------------------------------|----------------------------------------------------------------|
|    Funcional       | RF-006	Teste Usuário responde tópico       | Possibilita usuário responder e  interagir com outros participantes |
|    Funcional       | RF-001 Teste Usuário altera suas informaçãoes | Possibilita ao usuário alterar seus dados cadastrais |
|    Funcional       | RF-005 Teste Criar planos de estudos       | Permitir o monitoramento do progresso do usário em seus estudos e dinâmica de alteração de plano |
|    Funcional       | RF-005 Teste Visualizar planos de estudos publicados por outros usuários  |Permitir que o usuário consiga iniciar seus estudos mesmo sem saber montar um plano |
|    Funcional       |RF-001  Testar a FuncionalidadeLogin/ Cadastro                 | O sistema deve permitir o cadastro com informações corretas e gereciamento de dados do usuário, informando quando há erros no seu cadastramento|
|    Funcional       |RF-001    Teste Login/Logout           | O sistema deve permitir login/logout assim que requisitados pelo usuário e administrador  |
|    Funcional       | RF-001  Teste Alterar Cadastro               | O sistema deve permitir a alteração da informações do usuário, assim como atualização de seus dados automaticamente               |
|   Funcional        |     RF-006 - Teste Fórum de dúvidas   | Conceder ao usuário a criação de um novo tópico no fórum|
|   Funcional        |  RF-006 - Teste Fórum de dúvidas   |   Conceder ao usuário a edição de um tópico criado por ele mesmo no fórum|
|   Funcional  |  RF-006 - Teste de dúvidas | Conceder ao usuário a funcionalidade de busca por palavra-chave contido dentro do corpo das perguntas e listar o respectivo tópico| 
|   Funcional  |  RF-006 - TesteFórum de dúvidas  |  Conceder ao usuário o recurso de responder perguntas dentro de cada tópico do fórum |
|   Funcional | RNF-001	O sistema deve ser responsivo para rodar em um dispositivos móvel|A aplicação irá se expandir ou não de acordo com dispositivo utilizado|----------
                               
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

### RF-005 - Gestão de planos de estudo:
Na página de planos de estudos, o usuário clica em algum plano de estudos existente.
![Imagem1](https://user-images.githubusercontent.com/62313997/177422690-6299cd96-a722-4e9d-8cd5-a90b9e67bf3a.png)

Após clicar no plano de estudo, o usuário obtém corretamente a visão de todos os passos a serem estudados naquele plano.
![Imagem2](https://user-images.githubusercontent.com/62313997/177422782-10ccec18-32c9-4c75-84ec-54125a044cb3.png)

No plano de estudos, o usuário consegue marcar um passo concluído e persiste no banco de dados após recarregar a página
![Imagem3](https://user-images.githubusercontent.com/62313997/177423228-3dde4f61-ac5b-409a-a94b-82fdb6996ecc.png)

Novamente na página de planos de estudos, o usuário clica no botão "Crie seu plano de estudos"
![Imagem4](https://user-images.githubusercontent.com/62313997/177423299-6839e02a-9b58-4b90-968d-52a4c69f61a5.png)

Após clicar no botão citado, o usuário é redirecionado para o formulário, o preenche e clica em criar.
![Imagem5](https://user-images.githubusercontent.com/62313997/177424031-545423aa-b57e-4486-bb5c-bcf47e92db38.png)

O usuário é redirecionado para a página de planos de estudos, consegue ver seu plano criado e clica nele.
![Imagem6](https://user-images.githubusercontent.com/62313997/177424391-c6e70b41-d759-4136-86e9-74fe2be128e4.png)

O usuário vê todos os passos que cadastrou no plano de estudos, podendo marcar seu progresso conforme avança nos tópicos.
![Imagem7](https://user-images.githubusercontent.com/62313997/177424526-01fd9e2e-f51f-4c79-8f24-5a417a8deb41.png)

### RF-006 - Fórum de dúvidas:

Evidência de teste realizado ao criar um novo tópico.
![primeiro_print](https://user-images.githubusercontent.com/85000007/177356468-34a66643-be3a-4507-960f-213766a075ef.png)

Usuário é redirecionado para a página de criação de tópico para preenchimento dos campos.
![criar_topico_inf](https://user-images.githubusercontent.com/85000007/177350458-042bf495-1a78-46e9-816d-979d1e2492b7.png)

Ao clicar em "criar tópico" o usuário é redirecionado para a página principal do fórum e o tópico criado é listado junto aos demais.
![topico_criado](https://user-images.githubusercontent.com/85000007/177351491-18ae6b4b-5759-4424-9712-ff3cdf820687.png)

A partir do tópico criado, o usuário poderá editar as informações digitadas anteriormente clicando no lápis que é exibido no tópico de sua autoria.
![clique_editar_topico](https://user-images.githubusercontent.com/85000007/177353397-c7c1bb82-6bc1-414a-9faf-dec34f395319.png)

Será exibido as informações preenchidas anteriormente e ao clicar em "salvar" o usuário será redirecionado para a listagem principal de tópico com as novas informações.
![topico_editado](https://user-images.githubusercontent.com/85000007/177354435-9c30ca57-56e3-4cff-a8e6-057e08c2e753.png)
![ultima_print](https://user-images.githubusercontent.com/85000007/177354302-63632648-11ed-4e8a-be7c-1cc25a5ff20e.png)

Para facilitar a busca o usuário poderá listar tópicos a partir de palavras-chaves contidas no corpo da dúvida. Existe também a opção de digitar novas palavras-chaves ou buscar pelas tags mais buscadas.
![lista_palavras](https://user-images.githubusercontent.com/85000007/177356123-6f8d7148-26a7-4016-93b4-6e5c4ccf64b4.png)


Ao clicar em buscar os respectivos tópicos que contiverem a palavra-chave serão exibidos.
![digita_palavra](https://user-images.githubusercontent.com/85000007/177355169-adc34f15-671f-4a85-92ca-137b944eeb8a.png)

O usuário poderá clicar sobre o título do tópico de seu interesse para exibir as discussões a respeito do assunto. 
![clicar_topico_expandido](https://user-images.githubusercontent.com/85000007/177357531-04350be7-9693-4dc8-a8d5-751c07628657.png)

### RF-006 - Usuário Responde Tópico:
Tela com dúvidas de outros usuários, possibilitando a interação entre usuários, bem como a resposta  por meio do botão "Responder". 
![Captura de tela 2022-07-05 191736](https://user-images.githubusercontent.com/64615420/177431313-038bf3c2-fec0-48af-a9f8-613d1f810eff.png)

Usuário interagindo, respondendo por meio do box de "Responder", conferindo data e hora.  
![Comentado ](https://user-images.githubusercontent.com/64615420/177432404-0f4140c8-36c1-4c7a-8abd-e6fc50b437e4.png)

### RF-005 - Usuário Altera Suas Informaçãoes:
Na tela de login usuário(estando logado) clica em "Esqueceu sua senha" e dá prosseguimento para a próxima tela.  
![Esqueceu senha ](https://user-images.githubusercontent.com/64615420/177432860-19d7e4a0-fa07-4aca-8d6c-e2f148391eef.png)

Na tela de "Alteração sua conta", o usuário tem a possibilidade de alterar seus dados cadastrais preenchendo o formulário, depois disso, clica em "Altera", para concluir o processo.  
![Alteração de dados](https://user-images.githubusercontent.com/64615420/177433003-a288a0c5-e0cb-4c9f-899e-8d300bbcf66f.png)


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
