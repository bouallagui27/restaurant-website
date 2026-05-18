// src/models/Contact.ts
import { DataTypes, Model } from "sequelize"
import { sequelize } from "@/lib/db"

export class Contact extends Model {
  public id!: number
  public name!: string
  public email!: string
  public subject!: string
  public message!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isEmail: true, 
      }
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Contact",
    tableName: "contacts",
    timestamps: true,
  }
)