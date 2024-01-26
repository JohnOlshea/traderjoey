import logo from '../../images/logo.svg';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

export default function Navbar() {
    return (
        <div className="py-4 flex justify-between items-center">
            <div>
                <div className="flex mr-6">
                    <img src={logo} alt="TraderJoey" />
                </div>
                <nav className="flex">
                    <a href="" className='mx-4'>Fx Trading</a>
                    <a href="" className='mx-4'>Exchanges</a>
                    <a href="" className='mx-4'>Watchlist</a>
                    <a href="" className='mx-4'>NFT</a>
                    <a href="" className='mx-4'>Portfolio</a>
                    <a href="" className='mx-4'>Product</a>
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