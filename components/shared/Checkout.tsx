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
      carId: car._id,
      // carModel: `${car.make} ${car.model}`,
      carModel: car.model,
      rentalCost: car.rentalCostPerDay,
      renterId: userId
    }
    await checkoutOrder(order);
  }
  return (
    <form action={onCheckout} method='post'>
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        Rent Car
      </Button>
    </form>
  )
}

export default Checkout