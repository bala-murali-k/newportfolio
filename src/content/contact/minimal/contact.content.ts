import { ContactData } from '../contact.content';

export const contactMinimalContent: ContactData = {
  header: {
    number: "05",
    title: "INITIATE CONTACT",
    tagline: "Have a project in mind, a question about my work, or just want to say hi?",
    status: {
      isAvailable: true,
      label: "Available for freelance & full-time roles (2026)",
    },
  },
  channels: [
    {
      number: "01",
      platform: "Email",
      value: "hello@yourdomain.com",
      href: "mailto:hello@yourdomain.com",
      note: "Response time: < 24 hrs",
    },
    {
      number: "02",
      platform: "GitHub",
      value: "github.com/bala-murali-k",
      href: "https://github.com/bala-murali-k",
      note: "Source repositories & active builds",
    },
    {
      number: "03",
      platform: "LinkedIn",
      value: "linkedin.com/in/yourhandle",
      href: "https://linkedin.com/in/yourhandle",
      note: "Career background & history",
    },
    {
      number: "04",
      platform: "Cal.com",
      value: "30-Min Discovery Call",
      href: "https://cal.com/yourhandle/30min",
      note: "Direct booking",
    },
  ],
  meta: {
    location: "Tirunelveli, Tamil Nadu, India",
    timezone: "IST (UTC +5:30)",
  },
  labels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send message",
  },
  successMessage: "Thanks for reaching out — I'll get back to you soon.",
};