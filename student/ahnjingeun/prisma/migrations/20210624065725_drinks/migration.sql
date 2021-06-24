/*
  Warnings:

  - You are about to drop the column `eng_name` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `kor_name` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `users_password` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[drink_id]` on the table `nutrition` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `created_at` on table `allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drink_allergies` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `english_name` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `drinks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `nutrition` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `categories` MODIFY `category_name` VARCHAR(3000) NOT NULL,
    MODIFY `category_description` VARCHAR(3000) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_images` MODIFY `image_url` VARCHAR(3000) NOT NULL;

-- AlterTable
ALTER TABLE `drinks` DROP COLUMN `eng_name`,
    DROP COLUMN `kor_name`,
    ADD COLUMN `english_name` VARCHAR(3000) NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(3000) NOT NULL,
    MODIFY `description` VARCHAR(3000) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `nutrition` MODIFY `calories` VARCHAR(3000) NOT NULL,
    MODIFY `sodium` VARCHAR(3000) NOT NULL,
    MODIFY `fat` VARCHAR(3000) NOT NULL,
    MODIFY `sugar` VARCHAR(3000) NOT NULL,
    MODIFY `protein` VARCHAR(3000) NOT NULL,
    MODIFY `caffeine` VARCHAR(3000) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `deleted_at`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `users_email`,
    DROP COLUMN `users_name`,
    DROP COLUMN `users_password`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191),
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `nutrition_drink_id_unique` ON `nutrition`(`drink_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users.email_unique` ON `users`(`email`);
