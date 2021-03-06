CREATE TABLE IF NOT EXISTS usuariosa (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre VARCHAR (30),
    apellido  VARCHAR (30),
    email VARCHAR (30),
    pass VARCHAR(16),
    cuil VARCHAR,
    perfil_id INTEGER REFERENCES perfila(id)
);

CREATE TABLE IF NOT EXISTS perfila (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre VARCHAR (30),
    tipo BOOLEAN      
);

CREATE TABLE IF NOT EXISTS historial (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    estado VARCHAR,
    fechahora TIMESTAMP,
    tramite_id INTEGER REFERENCES tramitea(id),
    usuario_id INTEGER REFERENCES usuariosa(id)
);

CREATE TABLE IF NOT EXISTS tramitea (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    numero VARCHAR,
    interno_catastro INTEGER,
    caratula VARCHAR,
    observacion VARCHAR,
    fechainicio DATE
);

CREATE TABLE IF NOT EXISTS valoracion (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    valoracion INTEGER,
    tramite_id INTEGER REFERENCES tramitea(id)
);

CREATE TABLE IF NOT EXISTS mensura (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    n_origen VARCHAR,
    tipo_parcela INTEGER,
    departamento_mensura INTEGER,
    plano_mensura VARCHAR,
    matricula VARCHAR,
    comitente_mensura VARCHAR,
    plano_provisorio_uno VARCHAR,
    plano_provisorio_dos VARCHAR,
    plano_provisorio_tres VARCHAR,
    plano_definitivo VARCHAR,
    archivo_mensura VARCHAR,
    folio_mensura VARCHAR,
    cantidad_parcelas_mensura VARCHAR,
    observacion_mensura VARCHAR,
    tramite_id INTEGER REFERENCES tramitea(id)
);

CREATE TABLE IF NOT EXISTS nota (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    motivo INTEGER,
    origen VARCHAR,
    asunto VARCHAR,
    fechainicio_nota DATE,
    fechavenc_nota DATE,
    cantidad_parcelas_nota VARCHAR,
    observacion_nota VARCHAR,
    tramite_id INTEGER REFERENCES tramitea(id)
);

CREATE TABLE IF NOT EXISTS oficio (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    motivo_oficio INTEGER,
    asunto_oficio VARCHAR,
    termino_oficio DATE,
    fechavenc_oficio DATE,
    observacion_oficio VARCHAR,
    tramite_id INTEGER REFERENCES tramitea(id)
);

CREATE TABLE IF NOT EXISTS externo (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    codigo_externo VARCHAR,
    numero_externo VARCHAR,
    anyo_externo INTEGER,
    iniciador_externo VARCHAR,
    asunto_externo VARCHAR,
    cantidad_parcelas_externo VARCHAR,
    codigo_interno VARCHAR,
    observacion_externo VARCHAR,
    tramite_id INTEGER REFERENCES tramitea(id)
);

CREATE TABLE IF NOT EXISTS subsistencia (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    titulo_subsistencia VARCHAR,
    pdf_subsistencia VARCHAR
    mensura_id INTEGER REFERENCES mensuras(id)
);

CREATE TABLE IF NOT EXISTS certificado (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    informe_catastral VARCHAR,
    pdf_certificado VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS estado_cuenta (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    db_nodb VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS copia_escritura (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_escritura VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS visacion_agrimensores (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_visado_agrimensores BOOLEAN,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS notificacion (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_notificacion VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS citacion_colindante (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_citacion VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS acta_conformidad (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_acta VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS memoria_descriptiva (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    db_nodbmem BOOLEAN,
    cantidad VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS visacion_municipal (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_visacion_municipal VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS plano_proyecto_obra (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_citacion VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS aprobacion_agrimensura (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_aprobacion_agrimensura VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

CREATE TABLE IF NOT EXISTS plano_digital (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    pdf_plano_digital VARCHAR,
    mensura_id INTEGER REFERENCES mensura(id)
);

/* Insert usuarios 

INSERT INTO usuario(nombre, apellido, email, pass, cuil)
    VALUES('Gino', 'Gutierrez', 'ginogutierrez95@gmail.com', '12345678', '23386487979');

INSERT INTO usuario(nombre, apellido, email, pass, cuil)
    VALUES('Dibu', 'Martinez', 'mira_que_T_como@gmail.com', '09876543', '27335689782');

INSERT INTO usuario(nombre, apellido, email, pass, cuil)
    VALUES('Lionel', 'Messi', 'teamo_psg_30@gmail.com', '30303030', '23358799872');

/*asignacion de perfiles

INSERT INTO perfil (nombre, tipo, usuario_id, tramite_id)
    VALUES('Agrimensor', false, 1, 2);

INSERT INTO perfil (nombre, tipo, usuario_id, tramite_id)
    VALUES('Recepcion', true, 2, 3);

INSERT INTO perfil (nombre, tipo, usuario_id, tramite_id)
    VALUES('Director', true, 3, 1);

/*tramite

INSERT INTO tramite(nombre, fechainicio)
    VALUES('Oficio legal', '21-08-2021');

INSERT INTO tramite(nombre, fechainicio)
    VALUES('Solicitud de mensura', '21-08-2021');

INSERT INTO tramite(nombre, fechainicio)
    VALUES('Solicitud de mensura', '21-08-2021');*/