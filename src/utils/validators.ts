import type { MessagePayload } from "@/types";

type ValidationResult =
  | { valid: false; error: string }
  | { valid: true; data: MessagePayload };

export function validateMessage(payload: Partial<MessagePayload>): ValidationResult {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return { valid: false, error: "Name, email, and message are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Enter a valid email address." };
  }

  return {
    valid: true,
    data: { name, email, message }
  };
}
