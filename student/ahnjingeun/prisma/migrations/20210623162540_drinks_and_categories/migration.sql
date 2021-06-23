-- CreateTable
CREATE TABLE `drinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categories_id` INTEGER NOT NULL,
    `kor_name` VARCHAR(191) NOT NULL,
    `eng_name` VARCHAR(191) NOT NULL,
    `is_new` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `categories_id`(`categories_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(191) NOT NULL,
    `category_description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drinks` ADD FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
