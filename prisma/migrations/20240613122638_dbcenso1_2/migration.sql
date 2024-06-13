/*
  Warnings:

  - You are about to drop the column `CodCasa` on the `respuestas_estruc` table. All the data in the column will be lost.
  - You are about to drop the column `CodCasa` on the `respuestas_gral` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "respuestas_estruc" DROP COLUMN "CodCasa";

-- AlterTable
ALTER TABLE "respuestas_gral" DROP COLUMN "CodCasa";
