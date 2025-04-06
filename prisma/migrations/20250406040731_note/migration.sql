-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "contactID" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_contactID_fkey" FOREIGN KEY ("contactID") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
