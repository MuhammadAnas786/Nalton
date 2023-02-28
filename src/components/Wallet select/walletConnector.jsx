import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDispatch } from "react-redux";
import { setWallet } from "../../redux/actions/wallet";
// import { reset } from "../../redux/actions/baseNft";

const WalletConnector = ({ history }) => {
  const dispatch = useDispatch();
  const wallet = useWallet();
  dispatch(setWallet(wallet));

  if (wallet.connected) {
    console.log("wallet is connected");
    const pathname = window.location.pathname;
    if (pathname === "/") {
      history.push("/cm");
    }
  }
  return <></>;
};
export default WalletConnector;
