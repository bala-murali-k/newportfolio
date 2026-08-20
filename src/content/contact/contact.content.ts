export interface ContactHeader {
  number: string;
  title: string;
  tagline: string;
  status: {
    isAvailable: boolean;
    label: string;
  } | null;
}

export interface ContactChannel {
  number: string;
  platform: string;
  href: string;
  value: string;
  note?: string;
}

export interface ContactMeta {
  location: string;
  timezone: string;
}

export interface ContactFormLabels {
  name: string;
  email: string;
  message: string;
  submit: string;
}

export interface ContactData {
  header: ContactHeader;
  channels: ContactChannel[];
  meta: ContactMeta;
  labels: ContactFormLabels;
  successMessage: string;
}

export const contactContent: ContactData = {
  header: {
    number: "05",
    title: "CONNECT",
    tagline: "Let's build something deliberate.",
    status: {
      isAvailable: true,
      label: "Available for select opportunities",
    },
  },
  channels: [
    {
      number: "01",
      platform: "Email",
      value: "hello@yourdomain.com",
      href: "mailto:hello@yourdomain.com",
      note: "Primary inbox (typically responds in 24–48h)",
    },
    {
      number: "02",
      platform: "GitHub",
      value: "github.com/bala-murali-k",
      href: "https://github.com/bala-murali-k",
      note: "Public code & open-source contributions",
    },
    {
      number: "03",
      platform: "LinkedIn",
      value: "linkedin.com/in/yourhandle",
      href: "https://linkedin.com/in/yourhandle",
      note: "Professional background & history",
    },
    {
      number: "04",
      platform: "Cal.com",
      value: "30-Min Discovery Call",
      href: "https://cal.com/yourhandle/30min",
      note: "Direct calendar booking",
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