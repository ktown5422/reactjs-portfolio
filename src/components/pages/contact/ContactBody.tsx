"use client";

import emailjs from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icon: <IconPhone size={26} />,
    label: "Phone",
    value: "(314) 498-1411",
    href: "tel:+13144981411",
  },
  {
    icon: <IconMail size={26} />,
    label: "Email",
    value: "ktown5422@gmail.com",
    href: "mailto:ktown5422@gmail.com",
  },
  {
    icon: <IconMapPin size={26} />,
    label: "Location",
    value: "Houston, Texas",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ktown5422",
    icon: <IconBrandGithub size={22} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-townson/",
    icon: <IconBrandLinkedin size={22} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TechManKev",
    icon: <IconBrandYoutube size={22} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/techmankev/",
    icon: <IconBrandInstagram size={22} />,
  },
];

const inputClass =
  "w-full rounded-2xl border border-ink/10 bg-card px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

const labelClass = "mb-2 block text-sm font-semibold";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const ContactBody = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    emailjs
      .sendForm(
        "service_els7p38",
        "template_pdvgghp",
        form.current,
        "raCqOP3CvCX58UAST"
      )
      .then(
        () => {
          toast("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          toast("Message not sent — please email me directly.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="grid gap-6 pt-12 lg:grid-cols-[1fr_1.4fr]">
      {/* Info */}
      <motion.section {...fadeUp()} className="flex flex-col">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Contact info
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-muted">
          Don&rsquo;t be afraid! Just say hello — I read everything that comes
          through.
        </p>

        <div className="mt-10 space-y-4">
          {contactInfo.map((item, index) => (
            <motion.div
              {...fadeUp(index * 0.06)}
              key={item.label}
              className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-card p-5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-medium transition hover:text-accent"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Elsewhere
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-accent"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form */}
      <motion.section
        {...fadeUp(0.08)}
        className="rounded-4xl border border-ink/10 bg-card p-8 sm:p-10"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Name
              </label>
              <input
                className={inputClass}
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                className={inputClass}
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone (optional)
              </label>
              <input
                className={inputClass}
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your phone"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="subject">
                Subject
              </label>
              <input
                className={inputClass}
                id="subject"
                type="text"
                name="subject"
                placeholder="Your subject"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                className={inputClass}
                id="message"
                rows={8}
                placeholder="Type your message"
                name="message"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"}
            <IconSend size={17} />
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default ContactBody;
