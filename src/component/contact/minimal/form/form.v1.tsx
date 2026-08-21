import type { FormEvent } from 'react';
import Button from '@component/common/button';
import type { ContactData } from '@content/contact/contact.content';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface FormProps {
  values: ContactFormValues;
  labels: ContactData['labels'];
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

import React from 'react';

// Assuming FormProps is defined elsewhere
export default function FormV1({ values, labels, onChange, onSubmit }: FormProps) {
  return (
    <div data-component="contact-form">
      <form onSubmit={onSubmit}>
        <div data-input-group>
          <label htmlFor="form-name">{labels.name}</label>
          <input
            id="form-name"
            type="text"
            value={values.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div data-input-group>
          <label htmlFor="form-email">{labels.email}</label>
          <input
            id="form-email"
            type="email"
            value={values.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="hello@example.com"
            required
          />
        </div>

        <div data-input-group>
          <label htmlFor="form-message">{labels.message}</label>
          <textarea
            id="form-message"
            value={values.message}
            onChange={(e) => onChange('message', e.target.value)}
            placeholder="Tell me about your project..."
            rows={4}
            required
          />
        </div>

        <button type="submit" data-submit-btn>
          {labels.submit} <span data-arrow>↗</span>
        </button>
      </form>
    </div>
  );
}
