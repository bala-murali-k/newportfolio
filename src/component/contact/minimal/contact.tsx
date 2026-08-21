import { useState } from 'react';
import type { FormEvent } from 'react';
import { useStyle } from '@context/global/style-context';
import Form from './form';
import type { ContactFormValues } from './form';
import Channels from './channels';
import HeroV1 from './hero';
import FinisherV1 from './finisher/finisher.v1';
import { getContactContent } from '@content/contact';

/**
 * No backend exists yet (per architecture: frontend-only for v1).
 * Submission is handled locally only - it does not persist anywhere.
 * When the backend is added, replace handleSubmit's body with a real
 * API call without changing Form's markup.
 */
export default function CoreContact() {
  const { styleId } = useStyle();
  const contactContent = getContactContent(styleId);

  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('Contact form submitted (no backend yet):', values);
    setSubmitted(true);
  }

  return (
    <>
      <section data-component="contact-section-1">
        <Channels channels={contactContent.channels} />
      </section>
      <section data-component="contact-section-2">
        <HeroV1 />
      </section>
      <section data-component="contact-section-3">
        <Form values={values} labels={contactContent.labels} onChange={handleChange} onSubmit={handleSubmit} />
      </section>
      <section data-component="contact-section-4">
        <FinisherV1 />
      </section>
    </>
  );
}
