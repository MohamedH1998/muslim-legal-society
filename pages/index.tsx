import type { NextPage } from 'next'
import Cta from '../components/cta.tsx'
import Footer from '../components/footer'
import Hero from '../components/hero'
import ImageGrid from '../components/image-grid'
import Nav from '../components/nav'
import TextSection from '../components/text-section'

const Home: NextPage = () => {
  return (
    <div className="font-primary bg-silk-pillow space-y-5 min-[1473px]:px-40">
      <Nav/>
      <Hero/>
      <TextSection/>
      <Cta/>
      <ImageGrid/>
      <Footer/>
    </div>
  )
}

export default Home
