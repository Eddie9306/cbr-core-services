-- CreateTable
CREATE TABLE `Tenants` (
    `tenantId` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `employees` INTEGER NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Tenants_companyName_key`(`companyName`),
    PRIMARY KEY (`tenantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DocumentTypes` (
    `documentTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`documentTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
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
ALTER TABLE `Users` ADD CONSTRAINT `Users_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenants`(`tenantId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_documentTypeId_fkey` FOREIGN KEY (`documentTypeId`) REFERENCES `DocumentTypes`(`documentTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
