/*
  Warnings:

  - You are about to drop the `DocumentTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tenants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_documentTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_tenantId_fkey`;

-- DropTable
DROP TABLE `DocumentTypes`;

-- DropTable
DROP TABLE `Tenants`;

-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `tenants` (
    `tenantId` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `employees` INTEGER NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tenants_companyName_key`(`companyName`),
    PRIMARY KEY (`tenantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documentTypes` (
    `documentTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`documentTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `documentNumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `activated` BOOLEAN NOT NULL DEFAULT true,
    `tenantId` INTEGER NOT NULL,
    `documentTypeId` INTEGER NOT NULL,
    `wageRate` DECIMAL(65, 30) NOT NULL,
    `grossCompensation` DECIMAL(65, 30) NOT NULL,
    `netCompensation` DECIMAL(65, 30) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants`(`tenantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_documentTypeId_fkey` FOREIGN KEY (`documentTypeId`) REFERENCES `documentTypes`(`documentTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
