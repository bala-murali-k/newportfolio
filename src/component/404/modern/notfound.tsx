import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useStyle } from '@context/global/style-context';

export default function ModernNotFound() {
  const { styleId } = useStyle();

  return (
    <section 
      data-style={styleId} 
      data-component="not-found"
    >
      <div data-component-section="not-found-deco">
        <h1>404</h1>
      </div>

      <div data-component-section="not-found-content">
        <div data-not-found-header>
          <span data-index>00</span>
          <h2>OUT OF BOUNDS</h2>
        </div>

        <div data-divider />

        <p data-not-found-message>
          The requested path does not exist or has been shifted in architecture. 
          Return to the index or explore existing coordinates.
        </p>

        <Link to="/" data-cta>
          <ArrowLeft />
          <span>Return Home</span>
        </Link>
      </div>
    </section>
  );
}