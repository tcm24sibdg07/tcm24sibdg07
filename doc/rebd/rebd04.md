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

- **Check (validação de domínio):**

| Nome             | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| chk_preco_maior_que_zero  | preco     | > 0                 |
| chk_stock_nao_negativo    | stock     | >= 0                |

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

- **Check (validação de domínio):**

| Nome             | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| chk_emailformat  | email     | LIKE '%@_%.__%'     |

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

- **Check (validação de domínio):**

| Nome             | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| chk_metodo_pagamento_valido | metodo_pagamento | IN ('MB Way', 'Paypal', 'Contrareembolso', 'Cartão de Crédito', 'Multibanco', 'Apple Pay')  |

# Triggers:

- **Nome:** `ajustar_valor_contrareembolso_insert`
- **Momento:** `BEFORE INSERT`
- **Descrição:** Quando o método de pagamento da nova encomenda for `'Contrareembolso'`, esta trigger adiciona 1.95€ ao `valor_total`.
- **Objetivo:** Incluir automaticamente a taxa de cobrança adicional associada ao método de pagamento contrarreembolso.
  
```sql
DELIMITER $$

CREATE TRIGGER ajustar_valor_contrareembolso_insert
BEFORE INSERT ON encomenda
FOR EACH ROW
BEGIN
  IF NEW.metodo_pagamento = 'Contrareembolso' THEN
    SET NEW.valor_total = NEW.valor_total + 1.95;
  END IF;
END$$

DELIMITER ;
```
- **Nome:** `ajustar_valor_contrareembolso_update`
- **Momento:** `BEFORE UPDATE`
- **Descrição:** 
  - Se o método de pagamento for alterado de outro para `'Contrareembolso'`, adiciona 1.95€ ao `valor_total`.
  - Se for alterado de `'Contrareembolso'` para outro método, subtrai 1.95€ ao `valor_total`.
- **Objetivo:** Manter o valor total correto da encomenda sempre atualizado de acordo com alterações ao método de pagamento.
  
```sql
DELIMITER $$

CREATE TRIGGER ajustar_valor_contrareembolso_update
BEFORE UPDATE ON encomenda
FOR EACH ROW
BEGIN
  IF NEW.metodo_pagamento = 'Contrareembolso' AND OLD.metodo_pagamento != 'Contrareembolso' THEN
    SET NEW.valor_total = NEW.valor_total + 1.95;
  ELSEIF NEW.metodo_pagamento != 'Contrareembolso' AND OLD.metodo_pagamento = 'Contrareembolso' THEN
    SET NEW.valor_total = NEW.valor_total - 1.95;
  END IF;
END$$

DELIMITER ;
```

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

| Nome             | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| chk_estrelas     | estrelas  | BETWEEN 1 AND 5     |

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

- **Check (validação de domínio):**

| Nome             | Coluna(s) | Condição            |
|------------------|-----------|---------------------|
| chk_quantidade_maior_que_zero | quantidade | > 0   |

# Triggers:

- **Nome:** `set_preco_unitario_itemencomenda`
- **Momento:** `BEFORE INSERT`
- **Descrição:** Esta trigger é responsável por preencher automaticamente o campo `preco_unitario` de um novo `itemencomenda`, indo buscar o preço atual do produto correspondente na tabela `produto`.
- **Objetivo:** Garantir integridade e consistência de dados, assegurando que o preço unitário do item encomendado corresponde ao preço atual do produto.

```sql
DELIMITER $$

CREATE TRIGGER set_preco_unitario_itemencomenda
BEFORE INSERT ON itemencomenda
FOR EACH ROW
BEGIN
  DECLARE preco DECIMAL(10,2);

  SELECT preco INTO preco
  FROM produto
  WHERE id = NEW.produtoId;

  SET NEW.preco_unitario = preco;
END$$

DELIMITER ;
```

- **Nome:** `update_valor_total_after_insert`
-  **Momento:** `AFTER INSERT`
- **Função:** Assim que um novo item é inserido numa encomenda, esta trigger recalcula automaticamente o valor_total da encomenda somando o preço de todos os seus itens (preco_unitario * quantidade).

```sql
DELIMITER $$

CREATE TRIGGER update_valor_total_after_insert
AFTER INSERT ON itemencomenda
FOR EACH ROW
BEGIN
  UPDATE encomenda
  SET valor_total = (
    SELECT SUM(preco_unitario * quantidade)
    FROM itemencomenda
    WHERE encomendaId = NEW.encomendaId
  )
  WHERE id = NEW.encomendaId;
END$$

DELIMITER ;
```

- **Nome:** `update_valor_total_after_update`
-  **Momento:** `AFTER UPDATE`
- **Função:** Sempre que se atualiza a quantidade ou o preço unitário de um item, esta trigger recalcula o valor total da encomenda associada, garantindo que reflete os novos valores.

```sql
DELIMITER $$

CREATE TRIGGER update_valor_total_after_update
AFTER UPDATE ON itemencomenda
FOR EACH ROW
BEGIN
  UPDATE encomenda
  SET valor_total = (
    SELECT SUM(preco_unitario * quantidade)
    FROM itemencomenda
    WHERE encomendaId = NEW.encomendaId
  )
  WHERE id = NEW.encomendaId;
END$$

DELIMITER ;
```

- **Nome:** `update_valor_total_after_delete`
-  **Momento:** `AFTER DELETE`
- **Função:** Quando um item é removido de uma encomenda, esta trigger atualiza o valor_total dessa encomenda. Se for o último item a ser removido, o valor total é ajustado para 0 usando IFNULL().

```sql
DELIMITER $$

CREATE TRIGGER update_valor_total_after_delete
AFTER DELETE ON itemencomenda
FOR EACH ROW
BEGIN
  UPDATE encomenda
  SET valor_total = (
    SELECT IFNULL(SUM(preco_unitario * quantidade), 0)
    FROM itemencomenda
    WHERE encomendaId = OLD.encomendaId
  )
  WHERE id = OLD.encomendaId;
END$$

DELIMITER ;
```

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
