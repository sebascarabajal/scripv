-- CreateTable
CREATE TABLE "preguntas_gral" (
    "id_pregunta_gral" SERIAL NOT NULL,
    "pregunta_gral_txt" TEXT NOT NULL,

    CONSTRAINT "preguntas_gral_pkey" PRIMARY KEY ("id_pregunta_gral")
);

-- CreateTable
CREATE TABLE "respuestas_gral" (
    "id_rg" SERIAL NOT NULL,
    "id_CodCasa" INTEGER NOT NULL,
    "id_pregunta_gral" INTEGER NOT NULL,
    "respuesta_gral_valor" TEXT NOT NULL,

    CONSTRAINT "respuestas_gral_pkey" PRIMARY KEY ("id_rg")
);

-- CreateTable
CREATE TABLE "Encuestas" (
    "id_CodCasa" SERIAL NOT NULL,
    "CodCasa" TEXT NOT NULL,
    "id_Usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Encuestas_pkey" PRIMARY KEY ("id_CodCasa")
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
    "Creado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_Usuario")
);

-- CreateTable
CREATE TABLE "preguntas_estruc" (
    "id_estruct_preg" SERIAL NOT NULL,
    "estruc_preg_txt" TEXT NOT NULL,

    CONSTRAINT "preguntas_estruc_pkey" PRIMARY KEY ("id_estruct_preg")
);

-- CreateTable
CREATE TABLE "respuestas_estruc" (
    "id_re" SERIAL NOT NULL,
    "id_CodCasa" INTEGER NOT NULL,
    "id_estruct_preg" INTEGER NOT NULL,
    "respuesta_estruc" TEXT NOT NULL,

    CONSTRAINT "respuestas_estruc_pkey" PRIMARY KEY ("id_re")
);

-- CreateTable
CREATE TABLE "_EncuestasToUsuarios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Encuestas_CodCasa_key" ON "Encuestas"("CodCasa");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "_EncuestasToUsuarios_AB_unique" ON "_EncuestasToUsuarios"("A", "B");

-- CreateIndex
CREATE INDEX "_EncuestasToUsuarios_B_index" ON "_EncuestasToUsuarios"("B");

-- AddForeignKey
ALTER TABLE "respuestas_gral" ADD CONSTRAINT "respuestas_gral_id_pregunta_gral_fkey" FOREIGN KEY ("id_pregunta_gral") REFERENCES "preguntas_gral"("id_pregunta_gral") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_gral" ADD CONSTRAINT "respuestas_gral_id_CodCasa_fkey" FOREIGN KEY ("id_CodCasa") REFERENCES "Encuestas"("id_CodCasa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_estruc" ADD CONSTRAINT "respuestas_estruc_id_estruct_preg_fkey" FOREIGN KEY ("id_estruct_preg") REFERENCES "preguntas_estruc"("id_estruct_preg") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respuestas_estruc" ADD CONSTRAINT "respuestas_estruc_id_CodCasa_fkey" FOREIGN KEY ("id_CodCasa") REFERENCES "Encuestas"("id_CodCasa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncuestasToUsuarios" ADD CONSTRAINT "_EncuestasToUsuarios_A_fkey" FOREIGN KEY ("A") REFERENCES "Encuestas"("id_CodCasa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncuestasToUsuarios" ADD CONSTRAINT "_EncuestasToUsuarios_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuarios"("id_Usuario") ON DELETE CASCADE ON UPDATE CASCADE;
