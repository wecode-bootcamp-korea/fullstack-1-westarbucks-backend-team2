/*
  Warnings:

  - You are about to alter the column `kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `sodium` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `fat` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `protein` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `sugars` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `caffeine` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - A unique constraint covering the columns `[drink_id]` on the table `nutritions` will be added. If there are existing duplicate values, this will fail.
  - Made the column `created_at` on table `allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drink_allergies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drink_images` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `drinks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `nutritions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `categories` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_allergies` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drink_images` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `drinks` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `nutritions` MODIFY `kcal` DECIMAL(65, 30),
    MODIFY `sodium` DECIMAL(65, 30),
    MODIFY `fat` DECIMAL(65, 30),
    MODIFY `protein` DECIMAL(65, 30),
    MODIFY `sugars` DECIMAL(65, 30),
    MODIFY `caffeine` DECIMAL(65, 30),
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `nutritions_drink_id_unique` ON `nutritions`(`drink_id`);
