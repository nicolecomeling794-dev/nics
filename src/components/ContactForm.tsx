"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className="contact-form-group">
        <label htmlFor="cf-name" className="contact-form-label">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          className="contact-form-input"
          placeholder="Your name"
          required
          autoComplete="name"
          disabled={status === "loading"}
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="cf-email" className="contact-form-label">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          className="contact-form-input"
          placeholder="your@email.com"
          required
          autoComplete="email"
          disabled={status === "loading"}
        />
      </div>

      <div className="contact-form-group">
        <label htmlFor="cf-message" className="contact-form-label">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="contact-form-textarea"
          placeholder="Tell me about your project or inquiry…"
          rows={5}
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="contact-form-footer">
        <button
          type="submit"
          className="contact-form-submit"
          disabled={status === "loading"}
          aria-disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="contact-form-status contact-form-status--success" role="status">
            Message sent — I&apos;ll be in touch soon.
          </p>
        )}

        {status === "error" && (
          <p className="contact-form-status contact-form-status--error" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
