## Esse é um projeto para o conteúdo de `ORM - Associations`

### COMEÇANDO O EXERCÍCIO

Nesse exercício foi criado uma API que será responsável pela gestão de um sistema de saúde. Esse sistema possui pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas. O diagrama abaixo demonstra como o banco de dados se comportará:

![Diagrama](images/diagrama3.png)

Comando ultilizados:

- `npx sequelize db:create`
- `npx sequelize db:migrate`
- `npx sequelize db:seed:all`

Esses comandos vão criar respectivamente, a `database`, as `tables` e após, inserir dados exemplos nas tabelas.

As tabelas criadas são:

- Patients
- Patients_surgeries
- Plans
- Surgeries

---