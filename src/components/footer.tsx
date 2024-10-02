
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <hr className='opacity-50' />
        <nav className='flex justify-between gap-5 p-5'>
            <section>
                <h1>Logo</h1>
            </section>
            <section>
    <ul className='flex gap-5 text-2xl'>
        <li>
            <a href="#"><FaTwitter /></a>
        </li>

        <li>
            <a href="#"><FaInstagram /></a>
        </li>

        <li>
            <a href="#"><FaFacebook /></a>
        </li>
    </ul>
            </section>
        </nav>
    </footer>
  )
}

export default Footer