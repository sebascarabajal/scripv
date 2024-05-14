-- CreateTable
CREATE TABLE "preguntas_gral" (
    "id_pregunta_gral" SERIAL NOT NULL,
    "pregunta_gral_txt" TEXT NOT NULL,

    CONSTRAINT "preguntas_gral_pkey" PRIMARY KEY ("id_pregunta_gral")
);

-- CreateTable
CREATE TABLE "respuestas_gral" (
    "id_respuestas_gral" SERIAL NOT NULL,
    "id_pregunta_gral" INTEGER NOT NULL,
    "respuesta_gral_valor" TEXT NOT NULL,

    CONSTRAINT "respuestas_gral_pkey" PRIMARY KEY ("id_respuestas_gral")
);

-- CreateTable
CREATE TABLE "encuestas" (
    "id_encuesta" SERIAL NOT NULL,
    "id_respuestas_gral" INTEGER NOT NULL,
    "id_respuestas_estruc" INTEGER NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "sector" INTEGER NOT NULL,
    "manzana" TEXT NOT NULL,
    "casa" INTEGER NOT NULL,
    "nro_vivienda" INTEGER NOT NULL,
    "nro_hogares" INTEGER NOT NULL,

    CONSTRAINT "encuestas_pkey" PRIMARY KEY ("id_encuesta")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id_Usuario" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Tipo_usuario" TEXT NOT NULL,
    "Creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_Usuario")
);

-- CreateTable
CREATE TABLE "estruc_fam_preg" (
    "id_estruct_preg" SERIAL NOT NULL,
    "estruc_preg_txt" TEXT NOT NULL,

    CONSTRAINT "estruc_fam_preg_pkey" PRIMARY KEY ("id_estruct_preg")
);

-- CreateTable
CREATE TABLE "respuestas_estruc" (
    "id_respuestas_estruc" SERIAL NOT NULL,
    "id_estruct_preg" INTEGER NOT NULL,
    "respuesta_estruc" INTEGER NOT NULL,

    CONSTRAINT "respuestas_estruc_pkey" PRIMARY KEY ("id_respuestas_estruc")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- AddForeignKey
ALTER TABLE "respuestas_gral" ADD CONSTRAINT "respuestas_gral_id_pregunta_gral_fkey" FOREIGN KEY ("id_pregunta_gral") REFERENCES "preguntas_gral"("id_pregunta_gral") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encuestas" ADD CONSTRAINT "encuestas_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Usuarios"("id_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encuestas" ADD CONSTRAINT "encuestas_id_respuestas_gral_fkey" FOREIGN KEY ("id_respuestas_gral") REFERENCES "respuestas_gral"("id_respuestas_gral") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encuestas" ADD CONSTRAINT "encuestas_id_respuestas_estruc_fkey" FOREIGN KEY ("id_respuestas_estruc") REFERENCES "respuestas_estruc"("id_respuestas_estruc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_estruc" ADD CONSTRAINT "respuestas_estruc_id_estruct_preg_fkey" FOREIGN KEY ("id_estruct_preg") REFERENCES "estruc_fam_preg"("id_estruct_preg") ON DELETE RESTRICT ON UPDATE CASCADE;
