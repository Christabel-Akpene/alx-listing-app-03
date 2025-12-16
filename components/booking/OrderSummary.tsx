
const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white md:p-6 md:border-2 md:rounded-md">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col mt-4">
      <img src="assets/image2.png" alt="Property" className="w-32 object-cover rounded-md w-full" />
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm sm:text-lg text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm sm:text-lg text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;