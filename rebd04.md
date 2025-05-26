# C4 : Esquema Relacional  <!-- omit in toc -->
_(Apresentar o esquema físico da Base de Dados. Para cada relação resultante, apresente a descrição da tabela correspondente usando o exemplo apresentado.)_

- [Relações](#relações)
  - [Tabela_a](#tabela_a)
  - [Tabela_b](#tabela_b)
- [Vistas](#vistas)

## Relações

### PRODUTO

**Descrição:**  
Tabela que armazena os produtos disponíveis, com dados de stock, preço, e ligação à categoria.

**Colunas:**

| Nome         | Descrição               | Domínio        | Default | Automático | Nulo |
|--------------|-------------------------|----------------|---------|------------|------|
| id           | Identificador do produto| BIGINT         | -       | Sim        | Não  |
| stock        | Quantidade em stock     | INTEGER        | 0       | Não        | Não  |
| nome         | Nome do produto         | VARCHAR(100)   | -       | Não        | Não  |
| preço        | Preço do produto        | DECIMAL(10,2)  | -       | Não        | Não  |
| descrição    | Descrição do produto    | TEXT           | -       | Não        | Sim  |
| id_categoria | Categoria do produto    | BIGINT         | -       | Não        | Não  |

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
| nif             | Número de identificação fiscal | VARCHAR(9)    | -       | Não        | Não  |
| palavra_passe   | Palavra-passe encriptada       | VARCHAR(255)  | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Unicidade:**

| Nome                 | Coluna(s) | Indexar |
|----------------------|-----------|---------|
| cliente_email_unique | email     | Sim     |

---

### TELEMOVEL

**Descrição:**  
Tabela para múltiplos números de telemóvel por cliente.

**Colunas:**

| Nome        | Descrição             | Domínio     | Default | Automático | Nulo |
|-------------|-----------------------|-------------|---------|------------|------|
| id_cliente  | Referência ao cliente | BIGINT      | -       | Não        | Não  |
| telemóvel   | Número de telemóvel   | VARCHAR(15) | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id_cliente, telemóvel

- **Chave Estrangeira:**

| Nome               | Coluna(s)   | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|--------------------|-------------|----------------------|----------------------------|---------|
| telemovel_cliente_fk | id_cliente | CLIENTE              | id                         | Não     |

---

### ENCOMENDA

**Descrição:**  
Registo de encomendas feitas por clientes, com estado e eventual classificação.

**Colunas:**

| Nome              | Descrição                 | Domínio        | Default | Automático | Nulo |
|-------------------|---------------------------|----------------|---------|------------|------|
| id                | ID da encomenda           | BIGINT         | -       | Sim        | Não  |
| data              | Data da encomenda         | DATE           | now()   | Não        | Não  |
| método_pagamento  | Método de pagamento       | VARCHAR(50)    | -       | Não        | Não  |
| observação        | Observações gerais        | TEXT           | -       | Não        | Sim  |
| valor_total       | Total da encomenda        | DECIMAL(10,2)  | -       | Não        | Não  |
| id_cliente        | Cliente que fez           | BIGINT         | -       | Não        | Não  |
| id_estado         | Estado da encomenda       | BIGINT         | -       | Não        | Não  |
| id_classificacao  | Classificação atribuída   | BIGINT         | -       | Não        | Sim  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chaves Estrangeiras:**

| Nome                        | Coluna(s)        | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|-----------------------------|------------------|----------------------|----------------------------|---------|
| encomenda_cliente_fk        | id_cliente       | CLIENTE              | id                         | Não     |
| encomenda_estado_fk         | id_estado        | ESTADO               | id                         | Não     |
| encomenda_classificacao_fk  | id_classificacao | CLASSIFICACAO        | id                         | Não     |

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
| data        | Data da classificação            | DATE        | now()   | Não        | Não  |
| id_cliente  | Cliente que fez a classificação  | BIGINT      | -       | Não        | Não  |

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

### incluido_em

**Descrição:**  
Tabela associativa que liga produtos às encomendas, indicando quantidades e preço por unidade.

**Colunas:**

| Nome          | Descrição                      | Domínio        | Default | Automático | Nulo |
|---------------|--------------------------------|----------------|---------|------------|------|
| id_produto    | Produto incluído               | BIGINT         | -       | Não        | Não  |
| id_encomenda  | Encomenda associada            | BIGINT         | -       | Não        | Não  |
| preço_unitário| Preço do produto na encomenda  | DECIMAL(10,2)  | -       | Não        | Não  |
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
  PRODUTO.preço,
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
  ENCOMENDA.método_pagamento,
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
  CLASSIFICACAO.comentário,
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
  incluido_em.preço_unitário,
  (incluido_em.quantidade * incluido_em.preço_unitário) AS subtotal
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
