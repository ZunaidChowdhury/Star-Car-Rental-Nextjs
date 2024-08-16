import { ICar } from '@/lib/database/models/car.model'
import React, { useEffect } from 'react'
import { Button } from '../ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.actions';

loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = ({ car, userId }: { car: ICar, userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);
  const onCheckout = async () => {
    const order = {
      car: car._id,
      carModelName: `${car.make} ${car.model}`,
      // carModel: car.model,
      rentalCost: car.rentalCostPerDay,
      renter: userId
    }
    await checkoutOrder(order);
  }
  return (
    <div onClick={onCheckout} className="group w-full h-[80px] bg-[#705CF6] hover:bg-[#23ad00] rounded cursor-pointer transition-all duration-200 flex justify-center items-center">
      <h3 className='text-white font-bold text-[24px] group-hover:text-black transition-all duration-200 select-none'>BOOK NOW</h3>
    </div>
    // <form action={onCheckout} method='post'>
    //   <button type="submit" className="w-full text-white bg-[#705CF6] hover:bg-[#23ad00] transition-bg duration-300 font-medium rounded text-[30px] px-5 py-2.5 mb-2 ">Rent Car</button>
    // </form>
  )
}

export default Checkout