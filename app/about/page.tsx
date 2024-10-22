import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Image from "next/image"
import spring from '../public/spring.jpg'

const Aboutpage = () => {
  return (
    <div className="about text-white text-center" >
        <Header></Header>
      <p>Europe is heavily investing in AI while emphasizing ethics, regulation, and human rights. Major initiatives like Horizon Europe and the Digital Europe Program aim to boost AI research and innovation. The proposed AI Act categorizes AI systems by risk level, ensuring safety and privacy.

Key AI hubs include Germany (industrial AI), France (startups), the UK (research and innovation), and Nordic countries (public sector AI). Applications span healthcare, manufacturing, finance, and public services.

Challenges include strict data regulations (GDPR), competition from the U.S. and China, and a need for AI workforce development. Europe's focus on ethical AI could shape global standards.</p>

      <Footer></Footer>
    </div>
  )
}

export default Aboutpage
