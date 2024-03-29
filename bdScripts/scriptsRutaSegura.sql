
CREATE DATABASE rutasegura;

CREATE TABLE atractivos (
    nombre character varying(100),
    descripcion character varying(255),
    imgurl character varying(255),
    regiones_id integer,
    atractivo_id integer NOT NULL,
    categorias_id integer
);

CREATE TABLE categorias (
    id_cat integer NOT NULL,
    nombre character varying(255),
    regiones_id integer
);

CREATE TABLE regiones (
    id integer NOT NULL,
    nombreRegion character varying(100)
);

CREATE TABLE usuarios (
    id integer NOT NULL,
    usuario character varying(50),
    name character varying(100),
    pass character varying(255)
);

-- atractivo_id como clave primaria en la tabla atractivos
ALTER TABLE atractivos
ADD PRIMARY KEY (atractivo_id);

-- id_cat como clave primaria en la tabla categorias
ALTER TABLE categorias
ADD PRIMARY KEY (id_cat);

-- id como clave primaria en la tabla regiones
ALTER TABLE regiones
ADD PRIMARY KEY (id);

-- id como clave primaria en la tabla usuarios
ALTER TABLE usuarios
ADD PRIMARY KEY (id);

-- llave foránea en la columna regiones_id de la tabla atractivos
ALTER TABLE atractivos
ADD CONSTRAINT fk_atractivos_regiones
FOREIGN KEY (regiones_id)
REFERENCES regiones (id);

-- llave foranea en la columna categorias_id de la tabla atractivos
ALTER TABLE atractivos
ADD CONSTRAINT fk_atractivos_categorias
FOREIGN KEY (categorias_id)
REFERENCES categorias (id_cat);

-- llave foránea en la colunma regiones_id de la tabla categorias
ALTER TABLE categorias
ADD CONSTRAINT fk_categorias_regiones
FOREIGN KEY (regiones_id)
REFERENCES regiones (id);

