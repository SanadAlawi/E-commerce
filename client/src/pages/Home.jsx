import Categories from "../components/Categories"
import Features from "../components/Features"
import Slider from "../components/Slider"

const Home = () => {
  return (
    <div>
      <Slider />
      <Features type='Featured' />
      <Categories />
      <Features type='Trending' />
    </div>
  )
}

export default Home