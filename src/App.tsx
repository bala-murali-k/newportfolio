import { Route, Routes } from 'react-router-dom';
import { useStyle } from '@context/global/style-context';
import Layout from '@layout/core.layout';
import Header from '@component/common/header';
import Footer from '@component/common/footer';
import Sidebar from '@component/common/sidebar';
import HomePage from '@pages/home';
import ProjectsPage from '@pages/projects';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';

export default function App() {
  const { styleId } = useStyle();

  // Slot content is assembled here. Layout itself resolves which style's
  // layout to mount internally (see layout/core.layout.tsx) - App only
  // decides what goes into each slot. Sidebar navigation is currently a
  // minimal-only concept - modern keeps its nav inline in the header.
  const slots = {
    header: <Header />,
    footer: <Footer />,
    ...(styleId === 'minimal' ? { sidebar: <Sidebar /> } : {}),
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
