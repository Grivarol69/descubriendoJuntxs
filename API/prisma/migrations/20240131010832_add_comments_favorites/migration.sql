/*
  Warnings:

  - You are about to drop the column `eventId` on the `Donation` table. All the data in the column will be lost.
  - The `type` column on the `Donation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `state` column on the `Donation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `Type` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `donationId` on the `Payment` table. All the data in the column will be lost.
  - The `state` column on the `Program` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[programId]` on the table `Donation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contact_email` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_phone` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programId` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objective` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `syllabus` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Coach', 'Usuario');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('Activo', 'Inactivo');

-- CreateEnum
CREATE TYPE "ProgramType" AS ENUM ('Proyecto', 'Servicio');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('Recurrente', 'Especies', 'Corporativo');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('Activo', 'Inactivo', 'Finalizado');

-- CreateEnum
CREATE TYPE "PaymentState" AS ENUM ('Aceptado', 'Rechazado', 'Pendiente');

-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('Unico', 'Mensual', 'Trimestral', 'Anual');

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_donationId_fkey";

-- DropIndex
DROP INDEX "Donation_eventId_key";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "eventId",
ADD COLUMN     "contact_email" TEXT NOT NULL,
ADD COLUMN     "contact_phone" TEXT NOT NULL,
ADD COLUMN     "frequency" "Frequency" NOT NULL DEFAULT 'Unico',
ADD COLUMN     "programId" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "DonationType" NOT NULL DEFAULT 'Recurrente',
DROP COLUMN "state",
ADD COLUMN     "state" "PaymentState" NOT NULL DEFAULT 'Aceptado';

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "Type",
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "donationId",
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "objective" TEXT NOT NULL,
ADD COLUMN     "syllabus" TEXT NOT NULL,
ADD COLUMN     "type" "ProgramType" NOT NULL DEFAULT 'Proyecto',
DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Usuario';

-- CreateTable
CREATE TABLE "Commentary" (
    "programId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Commentary_pkey" PRIMARY KEY ("programId","userId")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "programId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("programId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_programId_key" ON "Donation"("programId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_eventId_key" ON "Payment"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_userId_key" ON "Payment"("userId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentary" ADD CONSTRAINT "Commentary_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentary" ADD CONSTRAINT "Commentary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
