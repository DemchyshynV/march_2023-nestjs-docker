// eslint-disable-next-line @typescript-eslint/no-var-requires
const typeorm = require('typeorm');

const dataSource = new typeorm.DataSource({
  name: 'default',
  type: 'postgres',
  host: 'db',
  port: '5432',
  username: 'user',
  password: 'user',
  database: 'mar-2023',
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.js,.ts}'],
});

module.exports = [dataSource];
