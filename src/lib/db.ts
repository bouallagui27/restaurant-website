// src/lib/db.ts
import { Sequelize } from "sequelize"
import mysql2 from "mysql2"

const sequelizeClient = () => {
  return new Sequelize(
    process.env.DB_NAME || "railway",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "",
    {
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT) || 3306,
      dialect: "mysql",
      dialectModule: mysql2,
      logging: false,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  )
}

const globalForSequelize = globalThis as unknown as {
  sequelize: Sequelize | undefined
}

export const sequelize = globalForSequelize.sequelize ?? sequelizeClient()

if (process.env.NODE_ENV !== "production") {
  globalForSequelize.sequelize = sequelize
}

export const connectDB = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.error("❌ Unable to connect to the MySQL database:", error)
  }
}