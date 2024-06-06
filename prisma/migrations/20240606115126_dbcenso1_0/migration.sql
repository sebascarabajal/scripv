-- CreateTable
CREATE TABLE "preguntas_gral" (
    "id_pregunta_gral" SERIAL NOT NULL,
    "pregunta_gral_txt" TEXT NOT NULL,

    CONSTRAINT "preguntas_gral_pkey" PRIMARY KEY ("id_pregunta_gral")
);

-- CreateTable
CREATE TABLE "respuestas_gral" (
    "id_rg" SERIAL NOT NULL,
    "CodCasa" TEXT NOT NULL,
    "id_pregunta_gral" INTEGER NOT NULL,
    "respuesta_gral_valor" TEXT NOT NULL,

    CONSTRAINT "respuestas_gral_pkey" PRIMARY KEY ("id_rg")
);

-- CreateTable
CREATE TABLE "Encuestas" (
    "CodCasa" TEXT NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Encuestas_pkey" PRIMARY KEY ("CodCasa")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id_Usuario" SERIAL NOT NULL,
    "id_censista" INTEGER NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Tipo_usuario" TEXT NOT NULL,
    "Creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_Usuario")
);

-- CreateTable
CREATE TABLE "preguntas_estruc" (
    "id_estruct_preg" INTEGER NOT NULL,
    "estruc_preg_txt" TEXT NOT NULL,

    CONSTRAINT "preguntas_estruc_pkey" PRIMARY KEY ("id_estruct_preg")
);

-- CreateTable
CREATE TABLE "respuestas_estruc" (
    "id_re" SERIAL NOT NULL,
    "CodCasa" TEXT NOT NULL,
    "id_estruct_preg" INTEGER NOT NULL,
    "respuesta_estruc" TEXT NOT NULL,

    CONSTRAINT "respuestas_estruc_pkey" PRIMARY KEY ("id_re")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- AddForeignKey
ALTER TABLE "respuestas_gral" ADD CONSTRAINT "respuestas_gral_id_pregunta_gral_fkey" FOREIGN KEY ("id_pregunta_gral") REFERENCES "preguntas_gral"("id_pregunta_gral") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_gral" ADD CONSTRAINT "respuestas_gral_CodCasa_fkey" FOREIGN KEY ("CodCasa") REFERENCES "Encuestas"("CodCasa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encuestas" ADD CONSTRAINT "Encuestas_id_Usuario_fkey" FOREIGN KEY ("id_Usuario") REFERENCES "Usuarios"("id_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_estruc" ADD CONSTRAINT "respuestas_estruc_id_estruct_preg_fkey" FOREIGN KEY ("id_estruct_preg") REFERENCES "preguntas_estruc"("id_estruct_preg") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_estruc" ADD CONSTRAINT "respuestas_estruc_CodCasa_fkey" FOREIGN KEY ("CodCasa") REFERENCES "Encuestas"("CodCasa") ON DELETE RESTRICT ON UPDATE CASCADE;
