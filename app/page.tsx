import {
  Navbar,
  Footer,
  Hero,
  Cta,
  LatestProjectsHero,
  LatestProjectsList,
  SignUp,
  LogIn,
  Testimonials,
  Pricing,
} from '../devlink';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cta />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
