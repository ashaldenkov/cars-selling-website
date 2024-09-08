-- CreateEnum
CREATE TYPE "attribute_type" AS ENUM ('BRAND', 'MODEL', 'SUBMODEL', 'SERIES_NAME', 'DETAILED_GRADE', 'ATTRIBUTE', 'COUNTRY');

-- CreateTable
CREATE TABLE "car" (
    "car_id" INTEGER NOT NULL,
    "title" CHAR(500) NOT NULL,
    "title_ru" CHAR(500),
    "price" INTEGER NOT NULL,
    "images" TEXT[],
    "external_url" TEXT,
    "color" CHAR(500),
    "color_ru" CHAR(500),
    "distance" INTEGER NOT NULL,
    "production_year" INTEGER NOT NULL,
    "fuel_type" CHAR(500) NOT NULL,
    "fuel_type_ru" CHAR(500),
    "v_type" CHAR(500) NOT NULL,
    "v_type_ru" CHAR(500),
    "registration_date" TIMESTAMP(6),
    "last_update" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);
