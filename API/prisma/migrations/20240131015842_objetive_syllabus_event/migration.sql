/*
  Warnings:

  - You are about to drop the `EventCoaches` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `objective` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `syllabus` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EventCoaches" DROP CONSTRAINT "EventCoaches_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventCoaches" DROP CONSTRAINT "EventCoaches_userId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "objective" TEXT NOT NULL,
ADD COLUMN     "syllabus" TEXT NOT NULL;

-- DropTable
DROP TABLE "EventCoaches";
