# C1 : Introdução


## Descrição do trabalho


O presente projeto tem como objetivo a análise e informatização do sistema de informação de uma pequena loja online dedicada à venda de produtos de beleza. Pretende-se estudar e desenvolver um modelo de dados que permita a gestão eficiente do negócio, incluindo a gestão de produtos, clientes, encomendas, stock e classificações.

Atualmente, a loja realiza a gestão de todas as suas operações de forma arcaica, o que leva a atrasos e erros, dificultando:
- O acompanhamento de encomendas.
- A gestão do stock.
- A experiência do cliente.
- A eficiência da operação.

Com o crescimento das vendas, tornou-se necessário informatizar o sistema de informação para garantir uma estrutura fiável.

## Descrição dos requisitos do utilizador
### Administrador

O Administrador será responsável pela gestão global do sistema.  
Este perfil tem permissões totais sobre todos os dados, podendo:

- **Gestão de Utilizadores:** 

  Editar dados, ativar/desativar/eliminar contas e repor palavras-passe.

- **Gestão de Produtos:** 

  Adicionar, editar, eliminar e atualizar o stock de produtos, incluindo nome, descrição, preço e categoria.

- **Gestão de Categorias:** 

  Criar, editar e remover categorias de produtos.

- **Gestão de Encomendas:** 

  Visualizar, alterar estados (ex: pendente, enviada, entregue, cancelada), corrigir ou eliminar encomendas, e consultar detalhes.

- **Histórico e Estatísticas:** 

  Aceder ao histórico de encomendas por cliente ou data e visualizar estatísticas (ex: produtos mais vendidos, número de encomendas, média de classificações por produto).

- **Gestão de Parâmetros e Integrações:** 

  Configurar métodos de pagamento, notificações do sistema, etc..


### Cliente

O Cliente terá um perfil restrito, podendo:

- **Registo e Gestão Pessoal:**

  Registar-se, editar dados pessoais (nome, e-mail, morada, telefone, NIF, palavra-passe) e eliminar a conta.

- **Navegação e Compras:**

  Visualizar o catálogo de produtos, aplicar filtros, consultar detalhes de produtos, adicionar ao carrinho e realizar encomendas (escolhendo o método de pagamento e deixando observações).

- **Acompanhamento de Encomendas:**

  Acompanhar o estado das encomendas (pendente, enviada, entregue) e consultar o histórico de compras.

- **Classificação de Encomendas:**

  Atribuir uma classificação de 1 a 5 estrelas a cada encomenda após esta estar no estado "Entregue". Deixar um comentário opcional sobre a experiência. Consultar classificações feitas anteriormente no seu histórico.

- **Repetir ou Cancelar Encomendas:**

  Repetir encomendas anteriores ou cancelar, dependendo do estado.

- **Notificações e Suporte:**

  Receber notificações sobre o estado das encomendas e submeter pedidos de apoio através de um formulário de contacto.


## Funcionalidades (Casos de Uso)

As principais funcionalidades do sistema, de acordo com os tipos de utilizadores, são:

### Administrador

- **Gestão de Produtos:**  
  Registo, edição e eliminação de produtos, incluindo nome, preço, categoria e quantidade em stock.

- **Gestão de Categorias de Produtos:**  
  Adicionar, editar ou excluir categorias de produtos.

- **Gestão de Clientes:**  
  Registar novos clientes, editar dados e eliminar registos de clientes.

- **Gestão de Encomendas:**  
  Visualizar, editar e atualizar o estado das encomendas.

- **Gestão de Stock:**  
  Monitorizar o stock de produtos, incluindo alertas de reposição e ajustes de inventário.

- **Gestão de Classificações e Observações:**
  Aceder à listagem de classificações/observações atribuídas pelos clientes, identificar produtos ou encomendas com média baixa e tomar decisões informadas. Eliminar comentários abusivos.


### Cliente

- **Visualização de Produtos:**  
  Navegar pelo catálogo de produtos, com possibilidade de usar filtros de categoria e preço.

- **Realização de Encomendas:**  
  Adicionar produtos ao carrinho, realizar o checkout escolhendo um método de pagamento e podendo deixar uma observação sobre a mesma.

- **Consulta de Encomendas:**  
  Aceder ao histórico de compras e acompanhar o estado das encomendas em tempo real.
  
- **Classificação de Encomendas:**  
  Após receber a encomenda, o cliente poderá: Atribuir uma classificação entre 1 e 5 estrelas, deixar um comentário opcional sobre a experiência e rever as classificações feitas anteriormente.

---
[< Previous](rebd00.md) | [^ Main](/../../) | [Next >](rebd02.md)
:--- | :---: | ---: 
