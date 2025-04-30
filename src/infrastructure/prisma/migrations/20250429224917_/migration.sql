/*
  Warnings:

  - A unique constraint covering the columns `[companyId]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `tenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tenants` ADD COLUMN `companyId` VARCHAR(191) NOT NULL,
    MODIFY `address` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tenants_companyId_key` ON `tenants`(`companyId`);
