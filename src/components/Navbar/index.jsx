import logo from '../../images/logo.svg';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

export default function Navbar() {
    return (
        <div className="fixed top-0 py-8 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} className="mr-6" alt="TraderJoey" />
                <nav className="flex">
                    <a href="/" className='mx-6 hover:text-primary'>Fx Trading</a>
                    <a href="/" className='mx-6 hover:text-primary'>Exchanges</a>
                    <a href="/" className='mx-6 hover:text-primary'>Watchlist</a>
                    <a href="/" className='mx-6 hover:text-primary'>NFT</a>
                    <a href="/" className='mx-6 hover:text-primary'>Portfolio</a>
                    <a href="/" className='mx-6 hover:text-primary'>Product</a>
                </nav>
            </div>
            <div className="flex">
                <SecondaryButton>
                    Sign In
                </SecondaryButton>
                <PrimaryButton>
                    Sign Up
                </PrimaryButton>
            </div>
        </div>
    )
}