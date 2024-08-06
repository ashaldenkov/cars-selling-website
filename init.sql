DO $$ BEGIN
    CREATE TYPE ATTRIBUTE_TYPE AS ENUM ('BRAND', 'MODEL', 'GENERATION', 'ATTRIBUTE');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create table for available attributes
CREATE TABLE IF NOT EXISTS public.available_attributes
(
    id SERIAL,
    title character(255) NOT NULL,
    att_type ATTRIBUTE_TYPE NOT NULL DEFAULT 'ATTRIBUTE',
    parent_att integer NULL REFERENCES public.available_attributes(id),
    description text COLLATE pg_catalog."default",
    last_update timestamp default current_timestamp,
    CONSTRAINT available_attributes_pk PRIMARY KEY (id),
    CONSTRAINT unique_title_att_type UNIQUE (title, att_type)
);

CREATE TABLE IF NOT EXISTS public.car
(
    id SERIAL,
    title character(500) NOT NULL,
    color character(255) NULL,
    car_mileage integer NULL,
    price integer NULL,
    production_year integer NULL,
    images text[] COLLATE pg_catalog."default",
    engine_capacity integer NULL,
    engine_power integer NULL,
    engine_type character(255) NULL,
    car_drive character(255) NULL,
    car_number character(255) NULL,
    brand_id integer REFERENCES public.available_attributes(id),
    model_id integer REFERENCES public.available_attributes(id),
    generation_id integer REFERENCES public.available_attributes(id),
    visible boolean default true NOT NULL,
    last_update timestamp default current_timestamp,

    CONSTRAINT car_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.car_attributes
(
    attribute_id INTEGER REFERENCES public.available_attributes(id),
    car_id INTEGER REFERENCES public.car(id),
    value text NOT NULL,
    CONSTRAINT cat_attribute_pk PRIMARY KEY(attribute_id,car_id) 
);