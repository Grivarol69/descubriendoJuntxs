/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "date",
DROP COLUMN "type",
ADD COLUMN     "dateIn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOut" TIMESTAMP(3),
ADD COLUMN     "state" "EventType" NOT NULL DEFAULT 'Activo',
ALTER COLUMN "duration" DROP NOT NULL;
