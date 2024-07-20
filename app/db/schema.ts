import { pgTable, serial, varchar, text, integer, uuid, unique } from "drizzle-orm/pg-core";

export const vehicleProblems = pgTable("vehicle_problems", {
  id: serial("id").primaryKey(),
  problem_desc: text("problem_desc"),
  diagnostics_info: text("diagnostics_info"),
  warning_lights: text("warning_lights"),
  brand: varchar("brand", { length: 255 }),
  model: varchar("model", { length: 255 }),
  year: integer("year"),
  fuel: varchar("fuel", { length: 50 }),
  engine_size: varchar("engine_size", { length: 50 }),
  power: varchar("power", { length: 50 }),
  transmission: varchar("transmission", { length: 20 }),
});

export type VehicleProblems = typeof vehicleProblems.$inferSelect;

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').unique(),
  name: text('name'),
})

export type user = typeof users.$inferSelect