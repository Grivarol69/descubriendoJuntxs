/*
  Warnings:

  - The primary key for the `Commentary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Commentary" DROP CONSTRAINT "Commentary_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Commentary_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id");
