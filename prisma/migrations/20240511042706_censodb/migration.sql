-- CreateTable
CREATE TABLE "Encuestas" (
    "encuesta_id" SERIAL NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "sector" TEXT NOT NULL,
    "manzana" TEXT NOT NULL,
    "vivienda" TEXT NOT NULL,
    "casa" TEXT NOT NULL,
    "hogar" TEXT NOT NULL,
    "supervisor" TEXT NOT NULL,
    "censista" TEXT NOT NULL,
    "respondente" TEXT NOT NULL,
    "visita" INTEGER NOT NULL,
    "fecha_carga" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Encuestas_pkey" PRIMARY KEY ("encuesta_id")
);

-- CreateTable
CREATE TABLE "Miembros_Grupo_Familiar" (
    "miembro_id" SERIAL NOT NULL,
    "encuesta_id" INTEGER NOT NULL,
    "parentesco" TEXT NOT NULL,

    CONSTRAINT "Miembros_Grupo_Familiar_pkey" PRIMARY KEY ("miembro_id")
);

-- CreateTable
CREATE TABLE "Preguntas_Miembro" (
    "pregunta_miembro_id" SERIAL NOT NULL,
    "miembro_id" INTEGER NOT NULL,
    "pregunta" TEXT NOT NULL,
    "tipo_pregunta" TEXT NOT NULL,
    "valor_respuesta" TEXT NOT NULL,

    CONSTRAINT "Preguntas_Miembro_pkey" PRIMARY KEY ("pregunta_miembro_id")
);

-- CreateTable
CREATE TABLE "Preguntas_Representante" (
    "pregunta_rep_id" SERIAL NOT NULL,
    "encuesta_id" INTEGER NOT NULL,
    "pregunta" TEXT NOT NULL,
    "tipo_pregunta" TEXT NOT NULL,
    "valor_respuesta" TEXT NOT NULL,
    "opciones_respuesta" TEXT NOT NULL,

    CONSTRAINT "Preguntas_Representante_pkey" PRIMARY KEY ("pregunta_rep_id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id_Usuario" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Tipo_usuario" TEXT NOT NULL,
    "Creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Modificado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_Usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- AddForeignKey
ALTER TABLE "Encuestas" ADD CONSTRAINT "Encuestas_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Usuarios"("id_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Miembros_Grupo_Familiar" ADD CONSTRAINT "Miembros_Grupo_Familiar_encuesta_id_fkey" FOREIGN KEY ("encuesta_id") REFERENCES "Encuestas"("encuesta_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preguntas_Miembro" ADD CONSTRAINT "Preguntas_Miembro_miembro_id_fkey" FOREIGN KEY ("miembro_id") REFERENCES "Miembros_Grupo_Familiar"("miembro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preguntas_Representante" ADD CONSTRAINT "Preguntas_Representante_encuesta_id_fkey" FOREIGN KEY ("encuesta_id") REFERENCES "Encuestas"("encuesta_id") ON DELETE RESTRICT ON UPDATE CASCADE;
