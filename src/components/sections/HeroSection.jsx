import globe from '../../images/illustrations/globe.png';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { BsChevronDown } from 'react-icons/bs';

export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-2">
                <div className='flex items-center'>
                    <div>
                        <p className="text-primary">SIGN UP</p>
                        <h1 className="text-4xl font-bold">The Worlds</h1>
                        <h1 className="text-4xl font-bold"> most reliable</h1>
                        <h1 className="text-4xl font-bold"> trading web app</h1>
                        <p className="text-gray">Trade, buy and sell local and international currencyy convenient <br /> trusted at the lowest rate</p>
                        <div className="flex">
                            <PrimaryButton>
                                Get Started
                            </PrimaryButton>
                            <SecondaryButton>
                                Download App
                                <BsChevronDown />
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={globe} alt="Globe" />
                </div>
            </div>
        </section>
    )
}