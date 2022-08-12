import Slider from './../Slider'

import ChoosePlatform from './ChoosePlatform'
import DeliverBest from './DeliverBest'
import CustomCVCard from './CustomCVCard'
import Price from './Price'
import CreativeTemplate from './CreativeTemplate'
import MainFeature from './MainFeature'

export default function Home() {
    return (
      <div style={{ padding: 20 }}>
        <Slider/>

        <ChoosePlatform/>

        <DeliverBest />
        <CustomCVCard />
        <Price />
        <CreativeTemplate />
        <MainFeature />
        <h2>Home View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
    );
  }