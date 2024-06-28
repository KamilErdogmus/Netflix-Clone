import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Loader;
