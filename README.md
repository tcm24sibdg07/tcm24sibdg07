
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

# C3 : Esquema conceptual


# Modelo Entidade-Associação (E/A)

## Entidade-Tipo: Produto

**Descrição:**  
A entidade "Produto" representa cada item disponível para venda na loja online. Esta entidade contém todas as informações essenciais sobre o produto, permitindo que os funcionários e administradores possam consultar, editar e controlar o catálogo da loja.

### Atributos:
- **ID_Produto:** Identificador único para cada produto.
- **Nome:** Nome do produto.
- **Preço:** Valor do produto.
- **Quantidade_Stock:** Quantidade de unidades disponíveis em stock.
- **Categoria:** Categoria à qual o produto pertence, como "Maquilhagem", "BodyCare", etc.

## Entidade-Tipo: Cliente

**Descrição:**  
A entidade "Cliente" contém informações sobre os clientes da loja online. Cada cliente tem um registo único no sistema, que armazena dados pessoais essenciais para a realização de compras e a gestão de encomendas.

### Atributos:
- **ID_Cliente:** Identificador único do cliente.
- **Nome:** Nome do cliente.
- **Email:** Endereço de e-mail do cliente.
- **Telefone:** Número de telefone do cliente.
- **Morada:** Endereço de entrega do cliente.
- **Data_Nascimento:** Data de nascimento do cliente.

## Entidade-Tipo: Encomenda

**Descrição:**  
A entidade "Encomenda" representa uma compra realizada por um cliente. Cada encomenda está associada a um cliente e contém informações sobre a data em que foi feita, o valor total da compra e os produtos incluídos.

### Atributos:
- **ID_Encomenda:** Identificador único da encomenda.
- **ID_Cliente:** Identificador do cliente que fez a encomenda.
- **Data_Encomenda:** Data em que a encomenda foi realizada.
- **Valor_Total:** Valor total da encomenda.

## Entidade-Tipo: Item_Encomenda

**Descrição:**  
A entidade "Item_Encomenda" representa um produto específico dentro de uma encomenda. Cada encomenda pode conter vários produtos, e esta entidade associa os produtos às encomendas feitas pelos clientes.

### Atributos:
- **ID_Encomenda:** Identificador da encomenda à qual o item pertence.
- **ID_Produto:** Identificador do produto incluído na encomenda.
- **Quantidade_Encomendada:** Quantidade de unidades do produto na encomenda.
- **Preco_Unitario:** Preço do produto no momento da compra.

## Entidade-Tipo: Categoria

**Descrição:**  
A entidade "Categoria" organiza os produtos da loja em grupos de acordo com o seu tipo ou características comuns. Cada produto é associado a uma categoria, facilitando a busca e filtragem de produtos no catálogo.

### Atributos:
- **ID_Categoria:** Identificador único da categoria.
- **Nome:** Nome da categoria (e.g., "Cuidados com a Pele", "Cabelos", etc.).

## Associações

### Produto - Categoria

**Descrição:**  
Cada produto pertence a uma categoria. A associação entre "Produto" e "Categoria" é de muitos para um, pois muitos produtos podem pertencer à mesma categoria.

**Cardinalidade:**  
Cada produto está associado a categorias e uma categoria pode conter vários produtos.

### Encomenda - Cliente

**Descrição:**  
Cada encomenda é realizada por um cliente. A associação entre "Encomenda" e "Cliente" é de muitos para um, pois cada cliente pode fazer várias encomendas, mas cada encomenda está associada a apenas um cliente.

**Cardinalidade:**  
Um cliente pode ter várias encomendas, mas cada encomenda pertence a um único cliente.

### Encomenda - Item_Encomenda

**Descrição:**  
Uma encomenda pode conter vários produtos (itens). A associação entre "Encomenda" e "Item_Encomenda" é de um para muitos, pois uma encomenda pode ter vários itens.

**Cardinalidade:**  
Cada encomenda pode ter múltiplos produtos (itens), mas cada item pertence a uma única encomenda.

### Produto - Item_Encomenda

**Descrição:**  
Um produto pode estar presente em várias encomendas, e cada encomenda pode conter vários produtos. A associação entre "Produto" e "Item_Encomenda" é de muitos para muitos, pois muitos produtos podem ser comprados em várias encomendas.

**Cardinalidade:**  
Um produto pode ser incluído em várias encomendas, e uma encomenda pode conter vários produtos.

## Diagrama do Modelo Entidade-Associação
 
![Diagrama do Modelo Entidade-Associação](imagens/Diagrama1.png)

## Regras de Negócio Adicionais (Restrições)

- **Quantidade de Produtos em Stock:**  
  A quantidade de produtos em stock nunca pode ser negativa. Se o stock não for suficiente para uma encomenda, o sistema deve impedir a finalização da compra.

- **Preço do Produto:**  
  O preço de qualquer produto deve ser sempre um valor positivo. Produtos com preço igual a zero ou negativo não podem ser vendidos.

- **Clientes Únicos:**  
  Não pode haver dois clientes com o mesmo e-mail ou número de telefone no sistema. O sistema vai verificar isso ao registar ou editar um cliente.

- **Status da Encomenda:**  
  Cada encomenda tem um status único, como "Em Processamento", "Enviado" ou "Cancelado". O status não pode ser alterado de forma inconsistente. Por exemplo, não se pode mudar uma encomenda "Enviada" para "Em Processamento".

- **Data da Encomenda:**  
  A data de uma encomenda deve ser sempre posterior à data de registo do cliente. Não é possível fazer uma encomenda antes de o cliente estar registado no sistema.

- **Quantidade Mínima e Máxima de Produtos:**  
  Cada produto tem um número mínimo e máximo de unidades que podem ser compradas numa única encomenda. O sistema vai garantir que a quantidade encomendada respeite esses limites.

- **Alteração de Preço Após Encomenda:**  
  O preço de um produto não pode ser alterado após a encomenda ser realizada, a menos que o cliente seja informado e concorde com a alteração.

- **Devoluções:**  
  O sistema controla as devoluções de produtos, permitindo apenas devoluções dentro do prazo e conforme as condições definidas pela loja.

- **Pagamentos:**  
  Uma encomenda só pode ser enviada depois de o pagamento ser confirmado. Se o pagamento não for processado corretamente, a encomenda não pode ser marcada como "Enviada".

- **Atualização de Stock:**  
  O stock de produtos deve ser atualizado corretamente sempre que uma encomenda for realizada ou cancelada, garantindo que as quantidades disponíveis estão sempre corretas.

Essas regras são fundamentais para manter o funcionamento correto do sistema e garantir que todos os processos sejam feitos de forma eficiente e sem erros.

---
< Previous | [^ Main](/../../) | [Next >](rei01.md)
:--- | :---: | ---: 
