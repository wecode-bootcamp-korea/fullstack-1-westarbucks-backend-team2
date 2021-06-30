/*
  Warnings:

  - You are about to alter the column `kcal` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `sodium` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `fat` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `protein` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `sugars` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.
  - You are about to alter the column `caffeine` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.

*/
-- AlterTable
ALTER TABLE `nutritions` MODIFY `kcal` DECIMAL(6, 2),
    MODIFY `sodium` DECIMAL(6, 2),
    MODIFY `fat` DECIMAL(6, 2),
    MODIFY `protein` DECIMAL(6, 2),
    MODIFY `sugars` DECIMAL(6, 2),
    MODIFY `caffeine` DECIMAL(6, 2);
