/*
  Warnings:

  - You are about to drop the column `companyId` on the `tenants` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `tenants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nationalId]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationalId` to the `tenants` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tenants_companyId_key` ON `tenants`;

-- AlterTable
ALTER TABLE `tenants` DROP COLUMN `companyId`,
    DROP COLUMN `companyName`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `nationalId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tenants_nationalId_key` ON `tenants`(`nationalId`);
