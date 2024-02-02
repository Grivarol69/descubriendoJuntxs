/*
  Warnings:

  - You are about to drop the column `Type` on the `Event` table. All the data in the column will be lost.
  - The `state` column on the `Program` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Coach', 'Usuario');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('Activo', 'Inactivo');

-- CreateEnum
CREATE TYPE "PaymentState" AS ENUM ('Aceptado', 'Rechazado', 'Pendiente');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "Type",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Usuario';
