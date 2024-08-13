-- CreateEnum
CREATE TYPE "attribute_type" AS ENUM ('BRAND', 'MODEL', 'GENERATION', 'ATTRIBUTE');

-- CreateTable
CREATE TABLE "available_attributes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "att_type" "attribute_type" NOT NULL DEFAULT 'ATTRIBUTE',
    "parent_att" INTEGER,
    "description" TEXT,
    "last_update" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "available_attributes_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT,
    "car_mileage" INTEGER,
    "price" INTEGER,
    "production_year" INTEGER,
    "images" TEXT[],
    "engine_capacity" DOUBLE PRECISION,
    "engine_power" INTEGER,
    "engine_type" TEXT,
    "car_drive" TEXT,
    "car_number" TEXT,
    "brand_id" INTEGER,
    "model_id" INTEGER,
    "generation_id" INTEGER,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "last_update" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_attributes" (
    "attribute_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "cat_attribute_pk" PRIMARY KEY ("attribute_id","car_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_title_att_type" ON "available_attributes"("title", "att_type");

-- AddForeignKey
ALTER TABLE "available_attributes" ADD CONSTRAINT "available_attributes_parent_att_fkey" FOREIGN KEY ("parent_att") REFERENCES "available_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "available_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_generation_id_fkey" FOREIGN KEY ("generation_id") REFERENCES "available_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "available_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "car_attributes" ADD CONSTRAINT "car_attributes_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "available_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "car_attributes" ADD CONSTRAINT "car_attributes_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
