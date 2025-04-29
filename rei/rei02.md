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
[< Previous](rei01.md) | [^ Main](/../../) | [Next >](rei03.md)
:--- | :---: | ---: 
