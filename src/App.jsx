import { Layout } from 'antd'
import Hero from './assets/components/Hero'
import Info from './assets/components/Info'
import EventIntro from './assets/components/EventIntro'
import CalendarMap from './assets/components/CalendarMap'
import Album from './assets/components/Album'
import WishForm from './assets/components/WishForm'

const { Content } = Layout

function App() {
  return (
    <Layout className="app-bg">
      <Content className="mobile-wrapper">
        <Hero/>
        <Info/>
        <EventIntro/>
        <CalendarMap/>
        <Album/>
        <WishForm/>
      </Content>
    </Layout>
  )
}

export default App