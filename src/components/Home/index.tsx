import Slider from './../Slider'

import ChoosePlatform from './ChoosePlatform'

export default function Home() {
    return (
      <div style={{ padding: 20 }}>
        <Slider/>

        <ChoosePlatform/>
        <h2>Home View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
    );
  }