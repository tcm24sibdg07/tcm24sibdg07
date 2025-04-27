# C1 : Introdução


## Descrição do trabalho


O trabalho consiste na especificação e desenvolvimento de um sistema de informação para uma pequena loja online dedicada à venda de produtos de beleza.  
O objetivo principal é informatizar o processo de gestão do negócio, de forma a garantir uma estrutura fiável e eficiente que otimize a gestão dos produtos, clientes, encomendas e stock.

Atualmente, a loja realiza a gestão de todas as suas operações manualmente, utilizando folhas de cálculo e comunicação via e-mail, o que leva a atrasos e erros, dificultando:
- O acompanhamento de encomendas.
- A gestão do stock.
- A experiência do cliente.
- A eficiência da operação.

## Objetivos da Informatização

A informatização do sistema visa:
- Resolver os problemas atuais.
- Criar um sistema que permita registar e consultar produtos e categorias.
- Gerir clientes e encomendas.
- Monitorizar o estado do stock.
- Acompanhar o histórico de compras.

Será desenvolvido um modelo de dados que permita a integração e automação dos processos internos da loja online, aumentando a:
- Precisão.
- Agilidade nas operações diárias.

## Benefícios Esperados

A transformação do modelo de gestão manual para um modelo informatizado permitirá:
- Maior eficiência operacional.
- Serviço mais rápido e preciso aos clientes.
- Automatização de tarefas como:
  - Controlo de stock.
  - Emissão de faturas.
  - Processamento de encomendas.
- Centralização de todas as informações num único sistema.
- Gestão do histórico de compras dos clientes.
- Desenvolvimento de promoções personalizadas e estratégias de fidelização.

## Fases do Trabalho

O trabalho será desenvolvido em várias fases:
1. **Análise do Sistema Atual**  
   Compreender as limitações e necessidades da loja.

2. **Modelação do Novo Sistema**  
   Definir processos e requisitos para a nova solução.

3. **Design do Banco de Dados**  
   Estruturar o armazenamento e as relações de dados.

4. **Implementação e Teste**  
   Construir o sistema e garantir o seu correto funcionamento.

5. **Avaliação da Eficácia**  
   Verificar a melhoria dos processos da loja após a implementação.

Cada fase será cuidadosamente planeada para assegurar que o sistema atenda às necessidades específicas da loja.

## Funcionalidades do Sistema

A especificação do sistema abordará funcionalidades essenciais como:
- Registo de produtos e categorias.
- Gestão de clientes.
- Criação e processamento de encomendas.
- Monitorização do stock.

## Modelação de Dados

A definição das relações entre os dados será crucial para:
- Ter um controlo eficaz do inventário.
- Melhorar o fluxo de trabalho da loja.


# Modelação do problema

A modelação do problema será realizada com base em alguns pressupostos que, apesar de não estarem diretamente mencionados na descrição inicial do trabalho, são fundamentais para a implementação de um sistema eficiente.  
Estes pressupostos visam simplificar a abordagem ao problema e garantir que o modelo de dados desenvolvido seja adequado às necessidades da loja online.

## Pressupostos

### Gestão Simples de Produtos e Categorias

- A loja terá um número limitado de categorias e um catálogo relativamente pequeno.
- A gestão de categorias e produtos será simples e direta.
- Não haverá necessidade de:
  - Subcategorias.
  - Gestão de atributos específicos como tamanho ou cor.
- Cada produto será associado a **uma única categoria**.

### Clientes Recorrentes

- Assume-se que a maioria dos clientes serão recorrentes.
- Serão armazenadas informações básicas dos clientes:
  - Nome.
  - E-mail.
  - Telefone.
  - Morada.
  - Data de aniversário.
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
  - PayPal.
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
- As principais ações (registo de produtos, processamento de encomendas, consulta de stock) serão simples e acessíveis.

### Escalabilidade Limitada

- O sistema será desenhado para:
  - Um volume médio de produtos, clientes e encomendas.
- Suportará crescimento gradual.
- Não será preparado para:
  - Grandes volumes de dados.
  - Muitas transações simultâneas no curto prazo.



---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
