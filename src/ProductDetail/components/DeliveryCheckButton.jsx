import { MapPin } from 'lucide-react';
import { useState } from 'react';

export default function DeliveryCheckButton() {
  const [pinCode, setPinCode] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckDelivery = () => {
    setIsChecking(true);
    console.log('Checking delivery for pin code:', pinCode);
    setTimeout(() => {
      setIsChecking(false);
      alert(`Delivery availability checked for ${pinCode}`);
    }, 1500);
  };

  return (
    <div className="rounded-lg relative  w-full">
      
      <div className="flex items-center">
        <img src='/product-catalog/location-pin.svg' alt='Location Pin' className='left-[1vw] absolute size-[1.6vw]'/>
        <input
          type="text"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="ENTER PIN CODE TO CHECK DELIVERY"
          className="flex-3/4 px-[3.2vw] py-[0.8vw] text-[1vw] font-raleway border border-gray rounded-l-2xl focus:outline-none bg-lightgray  font-medium"
          maxLength={6}
        />
        
        <button
          onClick={handleCheckDelivery}
          disabled={!pinCode || isChecking}
          className={`flex-1/4 items-center text-[1vw] justify-center py-[0.8vw] px-[1vw] border border-gray rounded-r-2xl text-yellow uppercase font-raleway ${
            !pinCode || isChecking
              ? 'bg-gray cursor-not-allowed'
              : 'bg-darkgreen hover:bg-darkgreen'
          } transition-colors`}
        >
          {isChecking ? 'Checking...' : 'Check'}
        </button>
      </div>
    </div>
  );
}