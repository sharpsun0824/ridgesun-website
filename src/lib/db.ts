export interface D1Database {
  prepare(sql: string): D1PreparedStatement;
}

export interface D1PreparedStatement {
  bind(...params: unknown[]): D1PreparedStatement;
  run(): Promise<{ success: boolean }>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
}

export function getDB(): D1Database {
  const { DB } = process.env as unknown as { DB: D1Database | undefined };
  if (!DB) throw new Error("DB binding not available");
  return DB;
}
