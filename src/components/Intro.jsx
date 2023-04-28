import { BsNintendoSwitch } from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";
import Banner from "./Banner";

const ranNum = Math.floor(Math.random() * 50) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div className="bg-gradient-to-t from-transparent to-red-400">
      <div className="pt-4">
        <Banner />
      </div>
      <div className="bg-gradient-to-b from-transparent to-orange-400 ">
        <div className="bg-gradient-to-b from-transparent to-yellow-400 ">
          <div className="bg-gradient-to-b from-transparent to-green-400">
            <div className="bg-gradient-to-b from-transparent to-blue-400 pt-5">
              <div className="max-w-screen-xl mx-auto px-4 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray700 text-9xl truncate opacity-40 poniter-events-none flex">
                  Mintendo.
                  <div>
                    <BsNintendoSwitch />
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="border-4 border-white absolute w-48 h-48 rounded-full"
                    src={imgSrc}
                    alt="NFT"
                  />
                  <div className="w-48 h-48 rounded-full bg-white text-black flex justify-center items-center">
                    Loading...
                  </div>
                </div>
                <div className="ml-6 mt-2 text-gray-950 text-4xl">Nario</div>
                <div className="text-gray-900 text-3xl mt-10 border-sky-100 border-4 rounded-xl">
                  <div className="ml-10 mt-4">WELCOME!!</div>
                  <div className="m-4">MINTENDO IS BIGGER THAN NINTENDO</div>
                  <div className="m-4">NARIO IS LOWER THAN MARIO</div>
                </div>

                <div className="text-xl py-4 text-center flex">
                  <div>
                    <div className=" text-gray-300 border-r-4 pr-4">
                      Total Supply
                    </div>
                    <div className="font-bold ">{totalNft}</div>
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-300 border-r-4 pr-4">
                      Current Supply
                    </div>
                    <div className="font-bold">{mintedNft}</div>
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-300 ">My NFT</div>
                    <div className="font-bold">{myNft}</div>
                  </div>
                  <div className="ml-56 cursor-pointer ">
                    For More Collection
                    <div className="flex justify-end">
                      <TbHandClick size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
