/**
 * Site-wide identity/contact meta - distinct from content/contact, which
 * only holds the contact *form's* labels. Currently consumed by Footer
 * for styles where the footer, not the header, owns contact info.
 */
export interface Profile {
  name: string;
  location: string;
  phone: string;
}

export const profileContent: Profile = {
  name: 'Bala Murali',
  location: 'Madurai, Tamil Nadu',
  phone: '9382513883',
};
