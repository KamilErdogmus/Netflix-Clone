import { baseImgUrl } from "../constants";

const DetailDisplay = ({ title, data }) => {
  return (
    <div className="mb-7">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-6">
        {data?.map((i, index) =>
          i.logo_path ? (
            <div key={i.id || index}>
              <img
                className="w-[100px] object-contain h-[100px] rounded-lg"
                src={baseImgUrl + i.logo_path}
                alt=""
              />
            </div>
          ) : (
            <span
              key={i.id || index}
              className="border flex items-center justify-content-center p-2 rounded-lg"
            >
              {i.name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
