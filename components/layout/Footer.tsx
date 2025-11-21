import { Separator } from "../ui/separator";
const Footer = () => {
  return (
    <div className="">
      <div className="h-6 bg-primary-green"></div>
      <div className="bg-black text-white px-6 lg:px-12">
        <div className="flex flex-col py-8">
          <div className="mb-8">
            <img src="assets/Vector1.png" alt="alx logo" />
          </div>
          <p>
            Alx is a platform where travelers can discover and book unique,
            comfortable and affordable lodging options worldwide. From cozy city
            apartments and tranquil countryside retreats to exotic beachside
            villas, ALX connects you with the perfect place to stay for any
            trip.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 px-4 mb-16 sm:grid-cols-3 sm:mb-4">
          <div className="text-sm">
            <p className="mb-4 text-lg">Explore</p>
            <p>Apartments in Dubai</p>
            <p>Hotels in New York</p>
            <p>Villa in Spain</p>
            <p>Mansion in Indonesia</p>
          </div>
          <div className="text-sm">
            <p className="mb-4 text-lg">Company</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Customers</p>
            <p>Brand</p>
          </div>
          <div className="text-sm">
            <p className="mb-4 text-lg">Help</p>
            <p>Support</p>
            <p>Cancel booking</p>
            <p>Refunds Process</p>
          </div>
        </div>
        <div className="py-8">
          <Separator />
          <div className="flex flex-col text-center gap-4 mt-4 sm:mt-12 lg:flex-row lg:justify-between">
            <div>
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details
              <span className="text-primary-green cursor-pointer"> here</span>
            </div>

            <div className="flex items-center justify-between text-sm sm:justify-center sm:gap-8">
              <p>Terms of Service</p>
              <p>Policy Service</p>
              <p>Cookies Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
