-- AlterTable
CREATE SEQUENCE preguntas_gral_id_pregunta_gral_seq;
ALTER TABLE "preguntas_gral" ALTER COLUMN "id_pregunta_gral" SET DEFAULT nextval('preguntas_gral_id_pregunta_gral_seq');
ALTER SEQUENCE preguntas_gral_id_pregunta_gral_seq OWNED BY "preguntas_gral"."id_pregunta_gral";
