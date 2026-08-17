export interface ContactContent {
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  successMessage: string;
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/contact/<style-id>/contact.<style-id>.content.ts yet.
 */
export const contactContent: ContactContent = {
  labels: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
  },
  successMessage: 'Thanks for reaching out.',
};
