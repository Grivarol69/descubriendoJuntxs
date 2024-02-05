/*
  Warnings:

  - The `state` column on the `Commentary` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `state` column on the `Participant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `state` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `commentary` to the `Commentary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Commentary" ADD COLUMN     "commentary" TEXT NOT NULL,
DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "state",
ADD COLUMN     "state" "PaymentState" NOT NULL DEFAULT 'Aceptado';
