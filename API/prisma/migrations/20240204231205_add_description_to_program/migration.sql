/*
  Warnings:

  - You are about to drop the column `amount` on the `Program` table. All the data in the column will be lost.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "description" TEXT NOT NULL;
