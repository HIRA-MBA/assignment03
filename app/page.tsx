import Image from "next/image";
import Link from "next/link";

import Header from './components/header/header'
import Footer from './components/footer/footer'
import image from './public/image.jpg'

export default function Home() {
  return (
    <div >
 



      <Header></Header>
      <div className="hero-section text-white font-bold" >
        <h1 className="heading underline decoration-solid font-bold m-3 text-xl text-center">AI in Europe</h1>
    <br/><p className="text-justify p-1">Europe has emerged as a significant player in the global AI landscape, characterized by a strong emphasis on ethical and responsible development.

The European Union's AI Strategy aims to foster a human-centric approach to AI, ensuring that its development and deployment align with European values and principles. This strategy includes initiatives such as the AI Act, the first comprehensive regulation on AI worldwide, which establishes a framework for assessing and classifying AI systems based on their risk levels.   

</p>
<br/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
  <Image
    src={image}
    alt="image"
    height={200}
    width={150}
    style={{ height: '300px', width: '300px' }}
  />
</div>
<p>The European Commission has also allocated substantial funding to support AI research and innovation, through programs like Horizon Europe and Digital Europe.

This investment has spurred the growth of AI ecosystems across Europe, with numerous research centers, startups, and established companies driving advancements in various AI fields. From healthcare and transportation to manufacturing and agriculture, AI is being applied to address a wide range of societal challenges.   

</p><br/>

<p>
While Europe has made significant strides, it faces challenges in competing with the dominant AI ecosystems in North America and Asia. To maintain its position, Europe needs to continue investing in research and talent, foster collaboration between academia and industry, and address the ethical and societal implications of AI. By prioritizing human-centric AI and building a strong regulatory framework, Europe can position itself as a global leader in the responsible and beneficial development of this transformative technology.


</p>
      </div>
      <Footer/>
    </div>
  );
}
