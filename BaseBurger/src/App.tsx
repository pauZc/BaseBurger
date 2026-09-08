import { RestaurantNavigationSection } from './RestaurantNavigationSection'
import { Hero } from './sections/Hero'
import { ArtisanalMarquee } from './sections/ArtisanalMarquee'
import { BeliefsSection } from './sections/BeliefsSection'
import { MenuHighlights } from './sections/MenuHighlights'
import { SocialProof } from './sections/SocialProof'
import { FindUs } from './sections/FindUs'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <RestaurantNavigationSection />
      <main>
        <Hero />
        <ArtisanalMarquee />
        <BeliefsSection />
        <MenuHighlights />
        <SocialProof />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
