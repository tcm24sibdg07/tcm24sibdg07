# C4 : Esquema Relacional  <!-- omit in toc -->

- [Relações](#relações)
  - [PRODUTO](#produto)
  - [CATEGORIA](#categoria)
  - [CLIENTE](#cliente)
  - [TELEMOVEL](#telemovel)
  - [ENCOMENDA](#encomenda)
  - [CLASSIFICACAO](#classificacao)
  - [ESTADO](#estado)
  - [incluido_em](#incluido_em)
- [Vistas](#vistas)
  - [vista_produtos_com_categoria](#vista_produtos_com_categoria)
  - [vista_encomendas_com_clientes](#vista_encomendas_com_clientes)
  - [vista_classificacoes_detalhadas](#vista_classificacoes_detalhadas)
  - [vista_detalhes_encomenda](#vista_detalhes_encomenda)

## Relações

### PRODUTO

**Descrição:**  
Tabela que armazena os produtos disponíveis, com dados de stock, preço, e ligação à categoria.

**Colunas:**

| Nome         | Descrição               | Domínio        | Default | Automático | Nulo |
|--------------|-------------------------|----------------|---------|------------|------|
| id           | Identificador do produto| BIGINT         | -       | Sim        | Não  |
| stock        | Quantidade em stock     | INTEGER        | 0       | Não        | Não  |
| nome         | Nome do produto         | VARCHAR(512)   | -       | Não        | Não  |
| preço        | Preço do produto        | DECIMAL(10,2)  | -       | Não        | Sim  |
| descrição    | Descrição do produto    | VARCHAR(512)   | -       | Não        | Sim  |
| categoriaId  | Categoria do produto    | INTEGER        | -       | Não        | Sim  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chave Estrangeira:**

| Nome                  | Coluna(s)      | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|-----------------------|----------------|----------------------|----------------------------|---------|
| produto_categoria_fk  | id_categoria   | CATEGORIA            | id                         | Não     |

- **Unicidade:**

| Nome                 | Coluna(s) | Indexar |
|----------------------|-----------|---------|
| produto_nome_unique  | nome      | Sim     |

---

### CATEGORIA

**Descrição:**  
Tabela com as categorias de produtos.

**Colunas:**

| Nome | Descrição              | Domínio      | Default | Automático | Nulo |
|------|------------------------|--------------|---------|------------|------|
| id   | Identificador da categoria | BIGINT | -       | Sim        | Não  |
| nome | Nome da categoria      | VARCHAR(50)  | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Unicidade:**

| Nome                  | Coluna(s) | Indexar |
|-----------------------|-----------|---------|
| categoria_nome_unique | nome      | Sim     |

---

### CLIENTE

**Descrição:**  
Tabela que guarda informações pessoais dos clientes.

**Colunas:**

| Nome            | Descrição                      | Domínio       | Default | Automático | Nulo |
|-----------------|--------------------------------|---------------|---------|------------|------|
| id              | Identificador do cliente       | BIGINT        | -       | Sim        | Não  |
| nome            | Nome do cliente                | VARCHAR(100)  | -       | Não        | Não  |
| morada          | Morada do cliente              | TEXT          | -       | Não        | Não  |
| email           | Email                          | VARCHAR(100)  | -       | Não        | Não  |
| data_nascimento | Data de nascimento             | DATE          | -       | Não        | Não  |
| nif             | Número de identificação fiscal | VARCHAR(9)    | -       | Não        | Sim  |
| palavra_passe   | Palavra-passe encriptada       | VARCHAR(255)  | -       | Não        | Não  |
| telemovel       | Número de telemóvel            | VARCHAR(20)   | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Unicidade:**

| Nome                 | Coluna(s) | Indexar |
|----------------------|-----------|---------|
| cliente_email_unique | email     | Sim     |

---

### ENCOMENDA

**Descrição:**  
Registo de encomendas feitas por clientes, com estado e eventual classificação.

**Colunas:**

| Nome              | Descrição                 | Domínio        | Default | Automático | Nulo |
|-------------------|---------------------------|----------------|---------|------------|------|
| id                | ID da encomenda           | BIGINT         | -       | Sim        | Não  |
| data              | Data da encomenda         | VARCHAR(512)   | now()   | Não        | Não  |
| método_pagamento  | Método de pagamento       | VARCHAR(50)    | -       | Não        | Não  |
| observação        | Observações gerais        | VARCHAR(512)   | -       | Não        | Sim  |
| valor_total       | Total da encomenda        | DECIMAL(10,2)  | -       | Não        | Sim  |
| clienteId         | Cliente que fez           | INTEGER        | -       | Não        | Sim  |
| estadoId          | Estado da encomenda       | INTEGER        | -       | Não        | Sim  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chaves Estrangeiras:**

| Nome                        | Coluna(s)        | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|-----------------------------|------------------|----------------------|----------------------------|---------|
| encomenda_cliente_fk        | id_cliente       | CLIENTE              | id                         | Não     |
| encomenda_estado_fk         | id_estado        | ESTADO               | id                         | Não     |

---

### CLASSIFICACAO

**Descrição:**  
Tabela que armazena avaliações feitas pelos clientes sobre as encomendas.

**Colunas:**

| Nome        | Descrição                        | Domínio     | Default | Automático | Nulo |
|-------------|----------------------------------|-------------|---------|------------|------|
| id          | Identificador da classificação   | BIGINT      | -       | Sim        | Não  |
| estrelas    | Avaliação em estrelas (1 a 5)    | INTEGER     | -       | Não        | Não  |
| comentário  | Comentário escrito do cliente    | TEXT        | -       | Não        | Sim  |
| data        | Data da classificação            | DATETIME    | now()   | Não        | Não  |
| encomendaId | Encomenda a que pertence a classificação  | BIGINT      | -       | Não        | Sim  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chave Estrangeira:**

| Nome                    | Coluna(s)   | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|-------------------------|-------------|----------------------|----------------------------|---------|
| classificacao_cliente_fk | id_cliente  | CLIENTE              | id                         | Não     |

- **Check (validação de domínio):**

| Nome            | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| estrelas_check   | estrelas  | BETWEEN 1 AND 5     |

---

### ESTADO

**Descrição:**  
Tabela com os diferentes estados possíveis de uma encomenda (Ex: "Pendente", "Pago", "Enviado").

**Colunas:**

| Nome | Descrição     | Domínio      | Default | Automático | Nulo |
|------|---------------|--------------|---------|------------|------|
| id   | ID do estado  | BIGINT       | -       | Sim        | Não  |
| nome | Nome do estado| VARCHAR(50)  | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Unicidade:**

| Nome               | Coluna(s) | Indexar |
|--------------------|-----------|---------|
| estado_nome_unique | nome      | Sim     |

---

### ITEMENCOMENDA

**Descrição:**  
Tabela associativa que liga produtos às encomendas, indicando quantidades e preço por unidade.

**Colunas:**

| Nome          | Descrição                      | Domínio        | Default | Automático | Nulo |
|---------------|--------------------------------|----------------|---------|------------|------|
| produtoId     | Produto incluído               | INTEGER        | -       | Não        | Sim  |
| encomendaId   | Encomenda associada            | INTEGER        | -       | Não        | Sim  |
| preço_unitário| Preço do produto na encomenda  | DECIMAL(10,2)  | -       | Não        | Sim  |
| quantidade    | Quantidade do produto          | INTEGER        | 1       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id_produto, id_encomenda

- **Chaves Estrangeiras:**

| Nome            | Coluna(s)    | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|-----------------|--------------|----------------------|----------------------------|---------|
| ie_produto_fk   | id_produto   | PRODUTO              | id                         | Não     |
| ie_encomenda_fk | id_encomenda | ENCOMENDA            | id                         | Não     |

---

## Vistas

---

### `vista_produtos_com_categoria`

**Descrição:**  
Apresenta a lista de produtos com os respetivos nomes de categoria.

```sql
CREATE VIEW vista_produtos_com_categoria AS
SELECT 
  PRODUTO.id AS id_produto,
  PRODUTO.nome AS nome_produto,
  PRODUTO.preco,
  PRODUTO.stock,
  CATEGORIA.nome AS categoria
FROM 
  PRODUTO
JOIN 
  CATEGORIA ON PRODUTO.id_categoria = CATEGORIA.id;
```

### `vista_encomendas_com_clientes`

**Descrição:**  
Mostra todas as encomendas com o nome do cliente e o estado da encomenda.

```sql
CREATE VIEW vista_encomendas_com_clientes AS
SELECT 
  ENCOMENDA.id AS id_encomenda,
  ENCOMENDA.data,
  ENCOMENDA.metodo_pagamento,
  ENCOMENDA.valor_total,
  CLIENTE.nome AS nome_cliente,
  ESTADO.nome AS estado
FROM 
  ENCOMENDA
JOIN 
  CLIENTE ON ENCOMENDA.id_cliente = CLIENTE.id
JOIN 
  ESTADO ON ENCOMENDA.id_estado = ESTADO.id;
```

### `vista_classificacoes_detalhadas`

**Descrição:**  
Mostra classificações com nome do cliente e data.

```sql
CREATE VIEW vista_classificacoes_detalhadas AS
SELECT 
  CLASSIFICACAO.id,
  CLASSIFICACAO.estrelas,
  CLASSIFICACAO.comentario,
  CLASSIFICACAO.data,
  CLIENTE.nome AS cliente
FROM 
  CLASSIFICACAO
JOIN 
  CLIENTE ON CLASSIFICACAO.id_cliente = CLIENTE.id;
```

### `vista_detalhes_encomenda`

**Descrição:**  
Combina detalhes de produtos incluídos em cada encomenda.

```sql
CREATE VIEW vista_detalhes_encomenda AS
SELECT 
  incluido_em.id_encomenda,
  ENCOMENDA.data,
  PRODUTO.nome AS produto,
  incluido_em.quantidade,
  incluido_em.preco_unitario,
  (incluido_em.quantidade * incluido_em.preco_unitario) AS subtotal
FROM 
  incluido_em
JOIN 
  ENCOMENDA ON ENCOMENDA.id = incluido_em.id_encomenda
JOIN 
  PRODUTO ON PRODUTO.id = incluido_em.id_produto;
```
---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
