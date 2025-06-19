# C3: Normalização

## Relações

### PRODUTO
| id |  | stock | nome | preco | descricao | id_categoria → CATEGORIA |
|----|----|-------|------|--------|-------------|--------------------------|

### CATEGORIA
| id |  | nome |
|----|----|------|

### CLIENTE
| id |  | nome | morada | email | data_nascimento | nif | palavra_passe | telemovel |
|----|----|------|--------|-------|------------------|-----|----------------|--------------|


### ENCOMENDA
| id |  | data | metodo_pagamento | observacao | valor_total | id_cliente → CLIENTE | id_estado → ESTADO | id_classificacao → CLASSIFICACAO |
|----|----|------|------------------|-------------|--------------|----------------------|---------------------|----------------------------------|

### ESTADO
| id |  | nome |
|----|----|------|

### CLASSIFICAÇÃO
| id |  | estrelas | comentario | data | id_cliente → CLIENTE |
|----|----|----------|-------------|------|-----------------------|

### itemencomenda
| id_produto → PRODUTO | id_encomenda → ENCOMENDA |  | preco_unitario | quantidade |
|----------------------|--------------------------|----|----------------|------------|


---

## Normalização do Esquema Relacional

Não é necessário proceder à normalização da base de dados, pois todas as tabelas já se encontram na **3ª Forma Normal (3NF)**.  
Esta conclusão baseia-se nos seguintes critérios:

###  1ª Forma Normal (1NF)

- Todos os atributos de todas as tabelas são atómicos.
- Cada célula contém apenas **um valor único**.

 O modelo está em 1NF.


###  2ª Forma Normal (2NF)

- Todas as tabelas com chave composta (ex.: itemencomenda) têm os seus atributos totalmente dependentes da chave primária completa.
- Tabelas com chave simples (ex.: cliente, produto) já estão automaticamente na 2NF.

 O modelo está em 2NF.



###  3ª Forma Normal (3NF)

- Não existem dependências transitivas: nenhum atributo não-chave depende de outro atributo não-chave.
- Todos os atributos não-chave dependem exclusivamente da chave primária de cada tabela.

 O modelo está em 3NF.
 
---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
