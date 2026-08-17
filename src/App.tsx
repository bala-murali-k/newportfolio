import { Route, Routes } from 'react-router-dom';
import { useStyle } from '@context/global/style-context';
import Header from '@component/common/header';
import Footer from '@component/common/footer';
import Sidebar from '@component/common/sidebar';
import HomePage from '@pages/home';
import ProjectsPage from '@pages/projects';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';

// Styles that currently have a sidebar slot in their layout. Modern stays
// bare/unstyled on purpose (a plain baseline to confirm the app still
// works), so it's left out here even though its layout can technically
// render a sidebar slot. Minimal is the one under active development.
// TODO: once more styles grow real sidebars, move this onto StyleConfig
// itself instead of listing ids here.
const STYLES_WITH_SIDEBAR = new Set(['minimal']);

export default function App() {
  const { style } = useStyle();
  const Layout = style.layout;

  // Slot content is assembled here, where we know which style/layout is
  // active. The layout itself stays presentation-only (see layout/).
  const slots = {
    header: <Header />,
    footer: <Footer />,
    ...(STYLES_WITH_SIDEBAR.has(style.id) ? { sidebar: <Sidebar /> } : {}),
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
