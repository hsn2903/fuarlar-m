-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HoteImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,
    CONSTRAINT "HoteImage_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_HoteImage" ("hotelId", "id", "url") SELECT "hotelId", "id", "url" FROM "HoteImage";
DROP TABLE "HoteImage";
ALTER TABLE "new_HoteImage" RENAME TO "HoteImage";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
