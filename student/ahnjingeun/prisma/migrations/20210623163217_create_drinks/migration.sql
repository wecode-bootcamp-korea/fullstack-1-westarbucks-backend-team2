-- CreateTable
CREATE TABLE `drink_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_url` VARCHAR(191) NOT NULL,
    `drinks_id` INTEGER NOT NULL,

    INDEX `drinks_id`(`drinks_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drink_allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drink_id` INTEGER NOT NULL,
    `allergies_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `drink_id`(`drink_id`),
    INDEX `allergies_id`(`allergies_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allergies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `allergy` INTEGER NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `drink_id` INTEGER NOT NULL,
    `calories` VARCHAR(191) NOT NULL,
    `sodium` VARCHAR(191) NOT NULL,
    `fat` VARCHAR(191) NOT NULL,
    `sugar` VARCHAR(191) NOT NULL,
    `protein` VARCHAR(191) NOT NULL,
    `caffeine` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `drink_id`(`drink_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `users_name` VARCHAR(191) NOT NULL,
    `users_email` VARCHAR(191) NOT NULL,
    `users_password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3),
    `deleted_at` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drink_images` ADD FOREIGN KEY (`drinks_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_allergies` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drink_allergies` ADD FOREIGN KEY (`allergies_id`) REFERENCES `allergies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutrition` ADD FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
