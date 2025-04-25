import { faBluesky, faGithub, faInstagram, faItchIo, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks() {
  return (
    <section className='horizontal-buttons'>
      <a href="https://www.instagram.com/wayfarerdraws/" target="_new">
        <FontAwesomeIcon icon={faInstagram} size='xl' color='aliceblue'/>
      </a>
      <a href="https://bsky.app/profile/featherwalk.bsky.social" target="_new">
        <FontAwesomeIcon icon={faBluesky} size='xl' color='aliceblue'/>
      </a>
      <a href="https://github.com/ChrisRothove" target="_new">
        <FontAwesomeIcon icon={faGithub} size='xl' color='aliceblue'/>
      </a>
      <a href="https://www.linkedin.com/in/christopher-rothove/" target="_new">
        <FontAwesomeIcon icon={faLinkedin} size='xl' color='aliceblue'/>
      </a>
      <a href="https://featherwalk.itch.io/" target="_new">
        <FontAwesomeIcon icon={faItchIo} size='xl' color='aliceblue'/>
      </a>
    </section>
  )
}