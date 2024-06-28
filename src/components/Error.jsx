const Error = () => {
  return (
    <div className="flex items-center justify-center p-4 mt-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
      <svg
        className="w-6 h-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 11.172 11.172 5.636 16.708l1.414 1.414L12 12.828l4.95 4.95 1.414-1.414-5.536-5.536z"
        ></path>
      </svg>
      <span>Oooppps!! Somethings wrong!</span>
    </div>
  );
};

export default Error;
