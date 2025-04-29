
# Relatório de Especificação da Informação

## Índice

C1 :[Introdução](rei01.md)  
C2 :[Especificação de Requisitos](rei02.md)  
C3 :[Esquema Conceptual](rei03.md)  

## Group _07_

* Catarina Morais [@h3xgxrl](https://github.com/h3xgxrl)
* Lara Pereira [@LaraDavidPereira](https://github.com/LaraDavidPereira)
* Miguel Tavares [@MiguelSantosTavares](https://github.com/MiguelSantosTavares)

# C1 : Introdução


## Descrição do trabalho


O presente projeto tem como objetivo a análise e informatização do sistema de informação de uma pequena loja online dedicada à venda de produtos de beleza. Pretende-se estudar e desenvolver um modelo de dados que permita a gestão eficiente do negócio, incluindo a gestão de produtos, clientes, encomendas e stock.

Atualmente, a loja realiza a gestão de todas as suas operações de forma arcaica, o que leva a atrasos e erros, dificultando:
- O acompanhamento de encomendas.
- A gestão do stock.
- A experiência do cliente.
- A eficiência da operação.

Com o crescimento das vendas, tornou-se necessário informatizar o sistema de informação para garantir uma estrutura fiável.

## Objetivos da Informatização

A informatização do sistema visa resolver os problemas atuais:

- Criar um sistema que permita registar e consultar, apagar e alterar produtos e categorias dos mesmos, incluindo preços.
- Gerir clientes, isto é, criar novas fichas de clientes, podendo tanto consultar, alterar e ou apagar, assim como acompanhar o seu histórico de compras.
- Gerir encomendas, isto é, poder consultá-las, alterá-las e ou cancelar as mesmas.
- Consultar o estado do stock, incluindo haver uma notificação quando o stock de determinado produto tiver em falta.
  

## Benefícios Esperados

A transformação do modelo de gestão manual para um modelo informatizado permitirá:
- Maior eficiência.
- Serviço mais rápido e preciso aos clientes.
- Automatização de tarefas como:
  - Controlo de stock.
  - Processamento de encomendas.
- Centralização de todas as informações num único sistema.
- Gestão do histórico de compras dos clientes.
- Desenvolvimento de promoções personalizadas e estratégias de fidelização.


# Modelação do problema

O sistema de informação da loja online deverá permitir o registo e gestão dos principais dados relacionados com o funcionamento da atividade. No que diz respeito aos produtos, será necessário armazenar o ID do produto, o nome, o preço, a quantidade em stock e a categoria a que pertence.
Os clientes da loja terão um registo próprio, que incluirá o seu ID, nome, e-mail, telefone, morada e a data de aniversário. As encomendas feitas pelos clientes deverão conter o ID da encomenda, o ID do cliente, a data da encomenda e o valor total da mesma. Cada encomenda poderá incluir vários produtos, por isso será necessário registar também os itens de cada encomenda, associando o ID da encomenda e do produto, a quantidade encomendada e o preço unitário no momento da compra.

A modelação do problema será realizada com base em alguns pressupostos que, apesar de não estarem diretamente mencionados na descrição inicial do trabalho, são fundamentais para a implementação de um sistema eficiente.  
Estes pressupostos visam simplificar a abordagem ao problema e garantir que o modelo de dados desenvolvido seja adequado às necessidades da loja online.

## Pressupostos

### Gestão Simples de Produtos e Categorias

- A loja terá um número limitado de categorias e um catálogo relativamente pequeno.
- A gestão de categorias e produtos será simples e direta.
- Não haverá necessidade de:
  - Subcategorias.
  - Gestão de atributos específicos como tamanho ou tipo de pele.

### Clientes Recorrentes

- Assume-se que a maioria dos clientes serão recorrentes.
- Serão armazenadas informações básicas dos clientes:
  - Nome.
  - E-mail.
  - Telefone.
  - Morada.
  - Data de nascimento (Aniversário).
- Não serão incluídas funcionalidades para:
  - Perfis avançados de clientes.
  - Preferências de compra.
  - Comportamentos de navegação.

### Encomendas e Inventário

- As encomendas incluirão apenas produtos disponíveis no catálogo.
- A gestão de stock será feita **em tempo real**.
- Cada encomenda:
  - Terá um valor total.
  - Poderá incluir vários itens.
  - Um produto poderá aparecer em várias encomendas.
- Não haverá:
  - Gestão de promoções.
  - Descontos individuais ou por volume de compra.

### Operação Sem Integração com Fornecedores

- O sistema gerirá apenas o processo interno da loja.
- Não haverá integração com:
  - Fornecedores externos.
  - Plataformas externas de gestão de inventário.
- A reposição de stock será feita **manualmente**.

### Processo Simples de Pagamento e Envio

- O pagamento será realizado através de métodos simples:
  - Cartão de crédito.
  - MBway.
- O envio das encomendas será feito através de:
  - Serviços externos (logística não gerida pelo sistema).
- O sistema apenas:
  - Registará as encomendas.
  - Monitorizará o estado das encomendas.

### Prioridade na Usabilidade

- A interface será:
  - Intuitiva.
  - Fácil de usar.
- O sistema será desenhado para utilizadores sem conhecimentos técnicos avançados.
- As principais ações (registo de produtos, processamento de encomendas e clientes, consulta de stock) serão simples e acessíveis.

### Escalabilidade Limitada

- O sistema será desenhado para:
  - Um volume médio de produtos, clientes e encomendas.
- Suportará crescimento gradual.
- Não será preparado para:
  - Grandes volumes de dados.
  - Muitas transações simultâneas no curto prazo.

# C2 : Especificação de Requisitos


## Tipos de Utilizadores (Atores)

### Administrador

O Administrador será responsável pela gestão global do sistema.  
Este perfil tem permissões totais sobre todos os dados, podendo:
- Adicionar, editar ou excluir produtos, categorias, clientes e encomendas.
- Aceder ao histórico de transações.
- Gerir o stock.

### Gestor de Stock

O Gestor de Stock terá acesso limitado à gestão de produtos e ao estado do stock.  
Responsabilidades:
- Atualizar as quantidades de produtos.
- Monitorizar o nível de stock.
- Gerar alertas para reposição de produtos quando necessário.

### Cliente

O Cliente terá um perfil restrito, podendo:
- Visualizar os produtos disponíveis.
- Realizar uma encomenda.
- Consultar o seu histórico de encomendas.
- Aceder aos dados de entrega e ao estado atual da sua encomenda.


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


### Gestor de Stock

- **Gestão de Produtos:**  
  Atualizar quantidades de produtos em stock, visualizar produtos em falta e gerar alertas para reposição.

- **Consulta de Stock:**  
  Acesso a relatórios sobre o estado do stock e produtos com baixo inventário.

### Cliente

- **Visualização de Produtos:**  
  Navegar pelo catálogo de produtos, com possibilidade de usar filtros de categoria e preço.

- **Realização de Encomendas:**  
  Adicionar produtos ao carrinho, realizar o checkout e efetuar o pagamento.

- **Consulta de Encomendas:**  
  Aceder ao histórico de compras e acompanhar o estado das encomendas em tempo real.

---
< Previous | [^ Main](/../../) | [Next >](rei01.md)
:--- | :---: | ---: 
