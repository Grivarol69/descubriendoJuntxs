/*
  Warnings:

  - The `duration` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "duration" "Frequency" NOT NULL DEFAULT 'Unico';

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "duration",
ADD COLUMN     "duration" "Frequency" NOT NULL DEFAULT 'Unico';
