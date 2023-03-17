import conf from "../../config";

export default function Footer(){
  return (
    <footer>
      

      <div className="links">
        {
          conf.SITE_DISCORD &&
          <a href={conf.SITE_DISCORD} target="_blank">Discord</a>
        }

        {
          conf.SITE_CREDITS &&
          <a href="https://filmak.onrender.com" target="_blank">🎨 by BUGBOUNT3D</a>
        }
      </div>

      <p className="disclaimer">&copy; {conf.SITE_TITLE}. We do not store any media.</p>
    </footer>
  )
}
