import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.resolve(here, "../data/inquiries.json");

export interface InquiryInput {
  name: string;
  email: string;
  product?: string | null;
  message: string;
}

export interface StoredInquiry extends InquiryInput {
  id: string;
  createdAt: string;
}

async function readAll(): Promise<StoredInquiry[]> {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return [];
  }
}

export async function saveInquiry(input: InquiryInput): Promise<StoredInquiry> {
  const entry: StoredInquiry = { ...input, id: randomUUID(), createdAt: new Date().toISOString() };
  const all = await readAll();
  all.push(entry);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(all, null, 2));
  return entry;
}
