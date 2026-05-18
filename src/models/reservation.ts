// src/models/Reservation.ts
import { DataTypes, Model } from "sequelize"
import { sequelize } from "@/lib/db"

export class Reservation extends Model {
  public id!: number
  public fullName!: string
  public phone!: string
  public date!: string
  public time!: string
  public guests!: string
  public specialRequests?: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(100), // VARCHAR(100) مناسب لـ MySQL
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),  // VARCHAR(20) باش يقبل الـ indicatif كيمـا +216
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,    // يخزن التاريخ برك YYYY-MM-DD
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(10),  // يخزن الوقت HH:MM
      allowNull: false,
    },
    guests: {
      type: DataTypes.STRING(30),  // يخزن string كيمـا "2 guests" أو "4 guests"
      allowNull: false,
    },
    specialRequests: {
      type: DataTypes.TEXT,        // TEXT مساحة أكبر للكتيبة الاختيارية
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Reservation",
    tableName: "reservations",
    timestamps: true, // تزيدك الـ createdAt و updatedAt أوتوماتيكياً
  }
)