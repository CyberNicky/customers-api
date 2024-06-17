-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);
