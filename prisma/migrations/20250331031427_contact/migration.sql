-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);
