import SocialLinks from '@/components/MainInfoCard/ContentBlocks/SocialLinks'
import me from '@assets/me.jpg'

export default function MainInfoCard() {
  return (
    <div className='card main-card'>
      <div>
        <img src={me} className="logo" alt="Vite logo" />
      </div>
      <h1 className='with-sub-head'>Chris Rothove</h1>
      <h2 className='sub-head with-sub-head'>@Featherwalk</h2>
      <h3 className='folio sub-head'>Software Dev | Illustration | Game Design</h3>
      <SocialLinks />
      <nav className='vertical-buttons'>
        <button>Web Projects</button>
        <button>Game Design</button>
      </nav>
      <section>
        <h2 className='section-header'>Welcome!</h2>
        <p>I'm a software developer and artist based in the Kansas City Missouri area. I use this page as a hub for various projects that I'm working on (I tend to have several of these). Feel free to peruse my portfolio, and thanks for visiting my page today!</p>
      </section>
    </div>
  )
}