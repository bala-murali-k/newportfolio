import { Route, Routes } from 'react-router-dom';
import { useStyle } from '@context/global/style-context';
import Header from '@component/common/header';
import Footer from '@component/common/footer';
import Sidebar from '@component/common/sidebar';
import HomePage from '@pages/home';
import ProjectsPage from '@pages/projects';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';

// Styles whose layout moves navigation into a sidebar instead of the
// header. This one flag decides three things together: the sidebar slot
// gets filled, the header drops its own nav (rule: nav lives in exactly
// one place), and the footer takes on contact info since header/sidebar
// are already spoken for. Modern stays untouched - bare/unstyled on
// purpose, a plain baseline to confirm the app still works.
// TODO: once more styles grow sidebars, move this onto StyleConfig itself
// instead of listing ids here.
const STYLES_WITH_SIDEBAR_NAV = new Set(['minimal']);

export default function App() {
  const { style } = useStyle();
  const Layout = style.layout;
  const usesSidebarNav = STYLES_WITH_SIDEBAR_NAV.has(style.id);

  // Slot content is assembled here, where we know which style/layout is
  // active. The layout itself stays presentation-only (see layout/).
  const slots = {
    header: <Header showNav={!usesSidebarNav} />,
    footer: <Footer showContactInfo={usesSidebarNav} />,
    ...(usesSidebarNav ? { sidebar: <Sidebar /> } : {}),
  };

  return (
    <Layout slots={slots}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
