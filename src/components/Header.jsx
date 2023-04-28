import { SiOpensea } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const url = "https://opensea.io/";

  return (
    <>
      <div className=" max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <div className="relative flex">
            <img
              className="mr-3"
              width={50}
              height={30}
              src={`${process.env.PUBLIC_URL}/images/nariostar1.png`}
              alt="star"
            />
            <div className="text-3xl flex justify-center items-center mt-2 ">
              Super
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <div className="text-4xl text-red-500 ml-3 mb-3">N</div>
              </div>
              <div className="ml-2">ario</div>
            </div>
          </div>
        </Link>

        <div className="flex text-2xl">
          <button
            onClick={() => {
              window.open(url);
            }}
          >
            <SiOpensea className="mt-1 text-5xl text-[#2081e2]" />
          </button>
          {account ? (
            <div className="ml-3 flex p-2 border-4 border-red-500 rounded-full justify-center items-center">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          ) : (
            <button
              onClick={onClickAccount}
              className="ml-3 flex items-center p-2 border-4 border-red-500 rounded-full "
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
