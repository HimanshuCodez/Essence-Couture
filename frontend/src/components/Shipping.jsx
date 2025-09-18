export default function Shipping() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-2 font-medium text-xs sm:text-sm md:text-base text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center text-center px-2 sm:px-4">
        <p className="truncate sm:whitespace-normal">
          🚚 Free Shipping on Orders Above ₹2000
        </p>
      </div>
    </div>
  );
}
