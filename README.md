# 🚀 API SOLID with TDD in NodeJS

Gympass style app.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar.
- [ ] Deve ser possível se autenticar.
- [ ] Deve ser possível obter o perfil de um usuário logado.
- [ ] Deve ser possível obter um número de check-ins realizados pelo usuário logado.
- [ ] Deve ser possível o usuário obter seu histórico de check-ins.
- [ ] Deve ser possível o usuário buscar academias próximas.
- [ ] Deve ser possível o usuário buscar academias pelo nome.
- [ ] Deve ser possível o usuário realizar checkin em uma academia.
- [ ] Deve ser possível validar o check-in de um usuário.
- [ ] Deve ser possível cadastrar uma academia.

## (RNs) Regras de Negócios

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado.
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia.
- [ ] O usuário não pode fazer check-ins se não estiver perto (100m) de uma academia.
- [ ] O Check-in só pode ser validado até 20 minutos após criado.
- [ ] O Check-in só pode ser validado por administradores.
- [ ] A academia só pode ser cadastrada por administradores.

## (RNFs) Requisitos Não Funcionais

- [ ] A senha do usuário precisa estar criptografada.
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL.
- [ ] Todas as listas de dados precisam estar paginadas por 20 itens por páginas.
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)
