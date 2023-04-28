import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className="bg-blue-400 relative rounded-2xl pb-4">
      {parseInt(mintedNft) < tokenId && (
        <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold pb-[100px]">
          Not Minted
        </div>
      )}
      <img
        className="rounded-t-2xl hover:scale-125 ease-linear duration-300"
        src={metadata.image}
        alt={metadata.name}
      />
      <div className="mt-4 text-2xl font-bold flex items-center px-4 text-white">
        Nario
      </div>
      <div className="mt-4 text-2xl font-bold px-4">#.{tokenId}</div>
      <div className="mt-4 text-2xl flex justify-end px-4 ">
        <Link to={`/${tokenId}`}>
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="bg-gray-50 text-gray-950 px-4 py-2 rounded-xl hover:bg-gray-500"
          >
            Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
