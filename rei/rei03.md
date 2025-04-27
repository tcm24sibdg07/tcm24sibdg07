# C3 : Esquema conceptual

## Modelo E/A
Aqui está o texto formatado em **Markdown**:

# Modelo Entidade-Associação (E/A)

## Introdução

O modelo Entidade-Associação (E/A) é uma representação visual das entidades e suas associações no sistema de informação da loja online. Ele define as principais entidades envolvidas no funcionamento da loja, as suas interações e os dados que serão geridos no sistema. As principais entidades-tipo, suas associações e os atributos associados são descritos a seguir.

## Entidade-Tipo: Produto

**Descrição:**  
A entidade "Produto" representa cada item disponível para venda na loja online. Esta entidade contém todas as informações essenciais sobre o produto, permitindo que os funcionários e administradores possam consultar, editar e controlar o catálogo da loja.

### Atributos:
- **ID_Produto:** Identificador único para cada produto.
- **Nome:** Nome do produto.
- **Preço:** Valor do produto.
- **Quantidade_Stock:** Quantidade de unidades disponíveis em stock.
- **Categoria:** Categoria à qual o produto pertence, como "Maquilhagem", "Cuidados com a Pele", etc.

## Entidade-Tipo: Cliente

**Descrição:**  
A entidade "Cliente" contém informações sobre os clientes da loja online. Cada cliente tem um registo único no sistema, que armazena dados pessoais essenciais para a realização de compras e a gestão de encomendas.

### Atributos:
- **ID_Cliente:** Identificador único do cliente.
- **Nome:** Nome do cliente.
- **Email:** Endereço de e-mail do cliente.
- **Telefone:** Número de telefone do cliente.
- **Morada:** Endereço de entrega do cliente.
- **Data_Aniversario:** Data de aniversário do cliente.

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
Cada produto está associado a uma categoria, mas uma categoria pode conter vários produtos.

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

Exemplo de inserção de uma imagem:  
![Diagrama do Modelo Entidade-Associação](images/image02.png)

Sempre adicione uma descrição para ajudar o usuário a entender a figura.

## Regras de Negócio Adicionais (Restrições)

Aqui estão algumas regras importantes que ajudam a manter o sistema correto e organizado. Elas não podem ser representadas diretamente no modelo E/A, mas são essenciais para garantir a boa gestão da loja online:

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
[< Previous](rei02.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
