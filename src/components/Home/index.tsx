import Slider from './../Slider'

import ChoosePlatform from './ChoosePlatform'
import DeliverBest from './DeliverBest'
import CustomCVCard from './CustomCVCard'
import Price from './Price'
import CreativeTemplate from './CreativeTemplate'
import MainFeature from './MainFeature'
import YourSuccess from './YourSuccess'
import Footer from './Footer'
import CircleColor from './../Shared/ColorCircle'

const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Slider />

      
      <ChoosePlatform />

      <DeliverBest />
      <CustomCVCard />
      <Price />
      <CreativeTemplate />
      <MainFeature />
      <YourSuccess />
      <Footer />

    </div>
  );
}

export default Home;