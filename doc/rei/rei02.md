# C2 : Especificação de Requisitos


## Tipos de Utilizadores (Atores)

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

Aceder ao histórico de encomendas por cliente ou data e visualizar estatísticas (ex: produtos mais vendidos, número de encomendas).

- **Gestão de Parâmetros e Integrações:** 

Configurar taxas de IVA, modos de envio, notificações do sistema e integrações externas (ex: métodos de pagamento ou de envio).


### Cliente

O Cliente terá um perfil restrito, podendo:

- **Registo e Gestão Pessoal:**
Registar-se, editar dados pessoais (nome, e-mail, morada, telefone, NIF, palavra-passe) e eliminar a conta.

- **Navegação e Compras:**
Visualizar o catálogo de produtos, aplicar filtros, consultar detalhes de produtos, adicionar ao carrinho e realizar encomendas (escolhendo métodos de pagamento e de envio).

- **Acompanhamento de Encomendas:**
Acompanhar o estado das encomendas (pendente, enviada, entregue) e consultar o histórico de compras.

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


### Cliente

- **Visualização de Produtos:**  
  Navegar pelo catálogo de produtos, com possibilidade de usar filtros de categoria e preço.

- **Realização de Encomendas:**  
  Adicionar produtos ao carrinho, realizar o checkout escolhendo um método de pagamento e de envio.

- **Consulta de Encomendas:**  
  Aceder ao histórico de compras e acompanhar o estado das encomendas em tempo real.



---
[< Previous](rei01.md) | [^ Main](/../../) | [Next >](rei03.md)
:--- | :---: | ---: 
