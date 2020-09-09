
import { Dialect } from 'sequelize'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PORT: number,
        DB_PORT: number,
        DB_HOST: string,
        DB_NAME: string,
        DB_DIALECT: Dialect,
        DB_USER: string,
        DB_PASSWORD: string,
    }
  }
}