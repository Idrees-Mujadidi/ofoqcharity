import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import RecentProjects from '../components/RecentProjects';
import Donate from '../components/Donate';
import Marquee from '../components/Marquee';
import Volunteer from '../components/Volunteer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Mission />
      <RecentProjects />
      <Donate />
      <Marquee />
      <Volunteer />
    </main>
  );
}
