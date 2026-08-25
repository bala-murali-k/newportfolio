import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export interface ProjectPreviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string | null;
  anchor?: 'bottom' | 'top' | 'left' | 'right';
  height?: string;
}

export default function ProjectPreviewDrawer({
  isOpen,
  onClose,
  title,
  url,
  anchor = 'bottom',
  height = '85vh',
}: ProjectPreviewDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      data-component="project-preview-drawer"
      data-open={isOpen ? 'true' : 'false'}
      data-anchor={anchor}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        data-drawer-backdrop
        onClick={onClose}
        tabIndex={-1}
      />

      {/* Bottom Sheet Panel */}
      <aside
        data-drawer-panel
        style={{
          ['--drawer-dimension' as string]: height,
        }}
      >
        {/* Header Bar */}
        <div data-drawer-header>
          <div data-drawer-header-meta>
            <span data-drawer-indicator />
            <h3>{title}</h3>
          </div>
          <button
            type="button"
            data-drawer-close-btn
            onClick={onClose}
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sandboxed Iframe Embed */}
        <div data-drawer-body>
          {url ? (
            <div data-drawer-embed-wrapper>
              <div data-preview-actions>
                <span data-preview-url>{url}</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-direct-link
                >
                  Open in new tab <ExternalLink size={14} />
                </a>
              </div>

              <div data-preview-frame-container>
                <iframe
                  src={url}
                  title={`${title} live preview`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div data-empty-drawer>
              <p>No preview URL available for this project release.</p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}