# C2 : Esquema conceptual

## Modelo E/A
![Diagrama do Modelo Entidade-Associação](imagens/Diagrama1.png)

O Diagrama mostra a estrutura dos dados da loja online. Representa os clientes, as encomendas que fazem, os produtos disponíveis, as categorias desses produtos e os diferentes estados das encomendas. Ajuda a perceber como tudo se liga e como a informação está organizada no sistema.

## Regras de negócio adicionais (Restrições)
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

- **Alteração de Preço Após Encomendas:**  
  O preço de um produto pode ser alterado, porém não afetará as encomendas anteriores à mudança.

- **Pagamentos:**  
  Uma encomenda só pode ser enviada depois de o pagamento ser confirmado, com excessão do método de pagamento de "contra-reembolso" (com uma taxa acrescida de 1,95€). Caso contrário, se o pagamento não for processado corretamente, a encomenda não pode ser marcada como "Enviada".

- **Atualização de Stock:**  
  O stock de produtos deve ser atualizado corretamente sempre que uma encomenda for realizada ou cancelada, garantindo que as quantidades disponíveis estão sempre corretas.

- **Classificação da Encomenda:**
A classificação só pode ser dada quando o estado da encomenda for "Entregue". Caso contrário, o sistema não permitirá que o cliente faça a avaliação.

- **Validação da Classificação:**
O cliente deve ser notificado de que a classificação foi registada com sucesso. O sistema deve garantir que apenas o cliente que fez a compra possa avaliar a encomenda.

- **Comentários/Observações Opcionais:**
Os comentários/observações são opcionais, mas caso o cliente escolha deixá-los, eles deverão ter um limite de caracteres para evitar entradas excessivas.

---
[< Previous](rebd01.md) | [^ Main](/../../) | [Next >](rebd03.md)
:--- | :---: | ---: 
