## Cadastro de PRODUTO com prisma, expressjs

Produto
name: Products
colunas

- ID UUID auto increment primary key
- name text not null
- bar_code text not null unique
- price numeric not null
