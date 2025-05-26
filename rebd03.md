# C3: Normalização

## Relações

### PRODUTO
| id || stock | nome | preço | descrição | id_categoria → CATEGORIA |
|----||-------|------|--------|------------|----------------------------|

### CATEGORIA
| id || nome |
|----||------|

### CLIENTE
| id | nome | morada | email | data_nascimento | nif | palavra_passe | {telemóvel} |
|----|------|--------|-------|------------------|-----|----------------|--------------|

### TELEMOVEL
| id_cliente → CLIENTE | telemóvel |
|----------------------|-----------|

### ENCOMENDA
| id | data | método_pagamento | observação | valor_total | id_cliente → CLIENTE | id_estado → ESTADO | id_classificacao → CLASSIFICAÇÃO |
|----|------|-------------------|-------------|--------------|----------------------|---------------------|-----------------------------|

### ESTADO
| id | nome |
|----|------|

### CLASSIFICAÇÃO
| id | estrelas | comentário | data | id_cliente → CLIENTE |
|----|----------|-------------|------|-----------------------|

### incluido_em
| id_produto → PRODUTO | id_encomenda → ENCOMENDA | preço_unitário | quantidade |
|----------------------|--------------------------|----------------|------------|

---

## Normalização do Esquema Relacional

Não é necessário proceder à normalização da base de dados, pois todas as tabelas já se encontram na **3ª Forma Normal (3NF)**.  
Além disso, não há necessidade de desnormalizar devido à:

- Garantia da **integridade dos dados**  
- **Minimização de redundâncias**  
- **Manutenção do desempenho**  
- **Simplicidade do sistema**
