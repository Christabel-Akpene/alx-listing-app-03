import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { Separator } from "@/components/ui/separator";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="md:flex-2/3">
            <BookingForm />
        </div>
        <div className="md:hidden">
            <Separator/>
        </div>
        <div className="md:flex-1/3">
            <OrderSummary bookingDetails={bookingDetails} />

        </div>
      </div>
    </div>
  );
}