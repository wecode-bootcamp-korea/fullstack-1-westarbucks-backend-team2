-- AlterTable
ALTER TABLE `drink_images` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- CreateIndex
CREATE INDEX `drink_id` ON `nutritions`(`drink_id`);
