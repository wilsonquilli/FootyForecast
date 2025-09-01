import './Components.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
    const navigate = useNavigate();

    const linkHover = { scale: 1.1, color: "#00C853" };

    return (
        <footer>
            <div className='footer'>
                &copy; 2025 FootyForecast | 
                <motion.span 
                    onClick={() => navigate('/privacy')} 
                    className='footer-link' 
                    whileHover={linkHover} 
                    style={{ cursor: 'pointer' }}
                >
                    Privacy
                </motion.span> |
                <motion.span 
                    onClick={() => navigate('/contact')} 
                    className='footer-link' 
                    whileHover={linkHover} 
                    style={{ cursor: 'pointer' }}
                >
                    Contact
                </motion.span> |
                <motion.a 
                    href="https://github.com/wilsonquilli" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='footer-link' 
                    whileHover={linkHover}
                >
                    Github
                </motion.a>
            </div>

            <div className='footer'>
                <motion.span 
                    onClick={() => navigate('/premierleague')} 
                    className='footer-link' 
                    whileHover={linkHover} 
                    style={{ cursor: 'pointer' }}
                >
                    Premier League
                </motion.span> |
                <motion.span 
                    onClick={() => navigate('/laliga')} 
                    className='footer-link' 
                    whileHover={linkHover} 
                    style={{ cursor: 'pointer' }}
                >
                    LaLiga
                </motion.span> |
                <motion.span 
                    onClick={() => navigate('/nfl')} 
                    className='footer-link' 
                    whileHover={linkHover} 
                    style={{ cursor: 'pointer' }}
                >
                    NFL
                </motion.span>
            </div>
        </footer>
    );
}

export default Footer;