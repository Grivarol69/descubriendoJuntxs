/*
  Warnings:

  - You are about to drop the column `duration` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Service` table. All the data in the column will be lost.
  - Added the required column `image` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlYoutube` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'Admin';

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "duration",
ADD COLUMN     "dateIn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOut" TIMESTAMP(3),
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "urlYoutube" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "duration",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "hourOut" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
