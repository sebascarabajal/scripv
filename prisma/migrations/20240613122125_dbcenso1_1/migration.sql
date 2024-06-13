/*
  Warnings:

  - Added the required column `CodCasa` to the `respuestas_estruc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CodCasa` to the `respuestas_gral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "respuestas_estruc" ADD COLUMN     "CodCasa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "respuestas_gral" ADD COLUMN     "CodCasa" TEXT NOT NULL;
