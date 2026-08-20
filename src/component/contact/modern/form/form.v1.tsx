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

export default function FormV1({ values, labels, onChange, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        {labels.name}
        <input
          value={values.name}
          onChange={(e) => onChange('name', e.target.value)}
          required
        />
      </label>
      <label>
        {labels.email}
        <input
          type="email"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
        />
      </label>
      <label>
        {labels.message}
        <textarea
          value={values.message}
          onChange={(e) => onChange('message', e.target.value)}
          required
        />
      </label>
      <Button type="submit">{labels.submit}</Button>
    </form>
  );
}
