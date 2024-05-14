/*
  Warnings:

  - You are about to drop the column `createdAt` on the `DeviceData` table. All the data in the column will be lost.
  - Added the required column `description` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DeviceData" DROP COLUMN "createdAt";
