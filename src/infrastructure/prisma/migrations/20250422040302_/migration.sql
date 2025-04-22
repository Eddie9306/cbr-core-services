/*
  Warnings:

  - Added the required column `payrollCycleId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transactions` ADD COLUMN `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `payrollCycleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `payrollCycleStatus` (
    `payrollCycleStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`payrollCycleStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payrollCycles` (
    `payrollCycleId` INTEGER NOT NULL AUTO_INCREMENT,
    `tenantId` INTEGER NOT NULL,
    `initDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `totalGrossEarning` DECIMAL(65, 30) NOT NULL,
    `totalNetEarning` DECIMAL(65, 30) NOT NULL,
    `transactionId` INTEGER NOT NULL,

    PRIMARY KEY (`payrollCycleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workRecords` (
    `workRecordId` INTEGER NOT NULL AUTO_INCREMENT,
    `payrollCycleId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `startTime` DATETIME(3) NULL,
    `endTime` DATETIME(3) NULL,
    `totalHoursWorked` DECIMAL(65, 30) NOT NULL,
    `grossEarning` DECIMAL(65, 30) NOT NULL,
    `netEarning` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`workRecordId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payrollCycles` ADD CONSTRAINT `payrollCycles_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants`(`tenantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workRecords` ADD CONSTRAINT `workRecords_payrollCycleId_fkey` FOREIGN KEY (`payrollCycleId`) REFERENCES `payrollCycles`(`payrollCycleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workRecords` ADD CONSTRAINT `workRecords_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_payrollCycleId_fkey` FOREIGN KEY (`payrollCycleId`) REFERENCES `payrollCycles`(`payrollCycleId`) ON DELETE RESTRICT ON UPDATE CASCADE;
