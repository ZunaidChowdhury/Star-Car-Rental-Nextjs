import React from 'react'
import Map from './Map'
import Dollar from '../icons/DollarIcon'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import TelegramIcon from '../icons/TelegramIcon'

const ForBooking = () => {
    return (
        <section className="w-full mt-[75px] flex flex-col justify-center items-center ">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
                <h2 className="font-extrabold text-[50px]">For Booking</h2>
                {/* <p className="text-grey-500 max-w-[800px]">We offer a hassle free car rental service. Book your car online and we deliver it to your doorstep.</p> */}

                <div className='flex gap-20 mt-[50px] mb-[50px] justify-between w-full max-w-[1100px]'>
                    <div className='flex flex-col items-center'>
                        <div className='mb-3'><WhatsAppIcon width='60px' height='60px' color='#705CF5' /></div>
                        <button type="button" className="mt-3 text-white bg-[#634DE8] hover:bg-[#5039e5] font-medium rounded-lg text-xl px-7 py-2.5 mb-2">
                            WhatsApp Channel 1
                        </button>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='mb-3'><TelegramIcon width='60px' height='60px' color='#705CF5' /></div>
                        <button type="button" className="mt-3 text-white bg-[#634DE8] hover:bg-[#5039e5] font-medium rounded-lg text-xl px-7 py-2.5 mb-2">
                            Telegram
                        </button>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='mb-3'><WhatsAppIcon width='60px' height='60px' color='#705CF5' /></div>
                        <button type="button" className="mt-3 text-white bg-[#634DE8] hover:bg-[#5039e5] font-medium rounded-lg text-xl px-7 py-2.5 mb-2">
                            WhatsApp Channel 2
                        </button>
                    </div>
                </div>

                <Map />
            </div>
        </section>
    )
}

export default ForBooking