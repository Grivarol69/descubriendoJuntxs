/*
  Warnings:

  - You are about to drop the column `eventId` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceId` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Coaching', 'Taller', 'Retiro');

-- CreateEnum
CREATE TYPE "ServiceState" AS ENUM ('Activo', 'Inactivo', 'Finalizado');

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_programId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_eventId_fkey";

-- DropIndex
DROP INDEX "Donation_programId_key";

-- DropIndex
DROP INDEX "Donation_userId_key";

-- DropIndex
DROP INDEX "Payment_eventId_key";

-- DropIndex
DROP INDEX "Payment_userId_key";

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "eventId",
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "eventId",
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Event";

-- DropEnum
DROP TYPE "EventType";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "dateIn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateOut" TIMESTAMP(3),
    "hourIn" TIMESTAMP(3),
    "duration" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "objective" TEXT NOT NULL,
    "syllabus" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL DEFAULT 'Coaching',
    "state" "ServiceState" NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
