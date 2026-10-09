"use client";

import { useState, type SyntheticEvent } from "react";
import { AlertIcon, SendIcon } from "@/components/icons";

type Status = "idle" | "sending" | "sent" | "mail-app" | "error";

// Optional: set NEXT_PUBLIC_CONTACT_ENDPOINT to a form backend that accepts a
// JSON POST (e.g. a Formspree form URL). Without it the form hands the message
// to the visitor's own email app.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Field = HTMLInputElement | HTMLTextAreaElement;

const isField = (target: EventTarget): target is Field =>
  target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;

function ErrorMessage({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="field-error">
      <AlertIcon className="size-4 shrink-0" />
      {children}
    </p>
  );
}

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  // :user-invalid drives the visuals; this keeps aria-invalid in step with it.
  function syncValidity(event: SyntheticEvent<HTMLFormElement>) {
    const field = event.target;
    if (!isField(field)) return;
    if (event.type === "blur" || field.hasAttribute("aria-invalid")) {
      field.setAttribute("aria-invalid", String(field.matches(":user-invalid")));
    }
  }

  function markInvalid(event: SyntheticEvent<HTMLFormElement>) {
    if (isField(event.target)) event.target.setAttribute("aria-invalid", "true");
  }

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const from = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();

    if (!endpoint) {
      const subject = `Portfolio enquiry from ${name}`;
      const body = `${message}\n\n— ${name}\n${from}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mail-app");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email: from, message }),
      });
      if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);
      form.reset();
      for (const field of form.querySelectorAll("[aria-invalid]")) {
        field.removeAttribute("aria-invalid");
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={syncValidity}
      onInput={syncValidity}
      onInvalidCapture={markInvalid}
      className="card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            aria-errormessage="contact-name-error"
            className="field-input"
          />
          <ErrorMessage id="contact-name-error">Please enter your name.</ErrorMessage>
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-errormessage="contact-email-error"
            className="field-input"
          />
          <ErrorMessage id="contact-email-error">
            Please enter a valid email address.
          </ErrorMessage>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder="Tell me about the role, project or idea…"
          aria-errormessage="contact-message-error"
          className="field-input resize-y"
        />
        <ErrorMessage id="contact-message-error">
          Please write a message of at least 10 characters.
        </ErrorMessage>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <SendIcon className="size-4" />
        </button>

        <p role="status" className="min-w-0 flex-1 basis-56 text-sm text-muted">
          {status === "sent" ? (
            <span className="text-ok">Message sent — thank you! I&apos;ll get back to you soon.</span>
          ) : null}
          {status === "mail-app" ? (
            <>
              Your email app should now be open with the message ready to send. Nothing
              happened? Write to{" "}
              <a href={`mailto:${email}`} className="text-primary underline underline-offset-4">
                {email}
              </a>
              .
            </>
          ) : null}
          {status === "error" ? (
            <span className="text-danger">
              That didn&apos;t send. Please email me directly at{" "}
              <a href={`mailto:${email}`} className="underline underline-offset-4">
                {email}
              </a>
              .
            </span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
