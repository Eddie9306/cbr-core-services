-- CreateTable
CREATE TABLE `bankAccountTypes` (
    `bankAccountTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`bankAccountTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banks` (
    `bankId` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`bankId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bankAccounts` (
    `bankAccountId` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,
    `bankAccountTypeId` INTEGER NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `bankId` INTEGER NOT NULL,

    PRIMARY KEY (`bankAccountId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactionStatus` (
    `transactionStatusId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`transactionStatusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `currencies` (
    `currencyId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`currencyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `accountId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `privateKey` VARCHAR(191) NOT NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`accountId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `transactionId` INTEGER NOT NULL AUTO_INCREMENT,
    `accountId` INTEGER NOT NULL,
    `requestedAmount` DECIMAL(65, 30) NOT NULL,
    `currencyId` INTEGER NOT NULL,
    `bankAccountId` INTEGER NOT NULL,
    `transactionStatusId` INTEGER NOT NULL,

    PRIMARY KEY (`transactionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bankAccounts` ADD CONSTRAINT `bankAccounts_bankAccountTypeId_fkey` FOREIGN KEY (`bankAccountTypeId`) REFERENCES `bankAccountTypes`(`bankAccountTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bankAccounts` ADD CONSTRAINT `bankAccounts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bankAccounts` ADD CONSTRAINT `bankAccounts_bankId_fkey` FOREIGN KEY (`bankId`) REFERENCES `banks`(`bankId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_accountId_fkey` FOREIGN KEY (`accountId`) REFERENCES `accounts`(`accountId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_currencyId_fkey` FOREIGN KEY (`currencyId`) REFERENCES `currencies`(`currencyId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_bankAccountId_fkey` FOREIGN KEY (`bankAccountId`) REFERENCES `bankAccounts`(`bankAccountId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_transactionStatusId_fkey` FOREIGN KEY (`transactionStatusId`) REFERENCES `transactionStatus`(`transactionStatusId`) ON DELETE RESTRICT ON UPDATE CASCADE;
