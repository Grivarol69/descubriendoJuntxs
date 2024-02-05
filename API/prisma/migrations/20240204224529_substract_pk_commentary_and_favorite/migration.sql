/*
  Warnings:

  - The primary key for the `Commentary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Commentary` table. All the data in the column will be lost.
  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favorite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Commentary" DROP CONSTRAINT "Commentary_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Commentary_pkey" PRIMARY KEY ("programId", "userId");

-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("programId", "userId");
