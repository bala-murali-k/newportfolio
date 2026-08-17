import { Route, Routes } from 'react-router-dom';
import { useStyle } from '@context/global/style-context';
import Header from '@component/common/header';
import Footer from '@component/common/footer';
import HomePage from '@pages/home';
import ProjectsPage from '@pages/projects';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';

export default function App() {
  const { style } = useStyle();
  const Layout = style.layout;

  // Slot content is assembled here, where we know which style/layout is
  // active. The layout itself stays presentation-only (see layout/).
  const slots = {
    header: <Header />,
    footer: <Footer />,
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
