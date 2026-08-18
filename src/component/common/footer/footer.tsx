import { profileContent } from '@content/common/profile.content';

interface FooterProps {
  /**
   * Header and sidebar are already spoken for (controls, nav). Styles
   * that opt in here give the footer a third job: a quick, no-click way
   * to see who this is and how to reach them, without a trip to the
   * Contact page. Off by default so styles that don't ask for it (e.g.
   * modern) keep the plain copyright line they had before.
   */
  showContactInfo?: boolean;
}

export default function Footer({ showContactInfo = false }: FooterProps) {
  const year = new Date().getFullYear();

  if (!showContactInfo) {
    return (
      <footer>
        <p>&copy; {year} Your Name. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer>
      <div data-footer="contact">
        <span data-footer="name">{profileContent.name}</span>
        <span data-footer="location">{profileContent.location}</span>
        <a data-footer="phone" href={`tel:${profileContent.phone}`}>
          {profileContent.phone}
        </a>
      </div>
      <p data-footer="copyright">
        &copy; {year} {profileContent.name}. All rights reserved.
      </p>
    </footer>
  );
}
