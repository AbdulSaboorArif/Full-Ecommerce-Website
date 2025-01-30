import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HomeProduct from "@/components/HomeProduct" 
import BeautifullRoom from '@/components/Beautifullroom'
import Footer from '@/components/Fotter'

export default function Home() {
  return (
    <main className="min-h-screen">
          
      <Header />
      <Hero />
      <HomeProduct/>
      <BeautifullRoom/>
      <Footer/>
    </main>
  )
}