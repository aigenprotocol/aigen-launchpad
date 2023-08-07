import {Web3Button, Web3NetworkSwitch} from "@web3modal/react";
import React from "react";
import {useAccount, useDisconnect} from "wagmi";

export default function ConnectWallet(props) {
    const {isConnected} = useAccount()
    const {disconnect} = useDisconnect()

    return (
        <div className="w-full h-full">
            <div className="max-w-4xl p-4 mx-auto">
                <div className="flex justify-center items-center gap-4">
                    <Web3NetworkSwitch />
                    <Web3Button/>
                    {isConnected ? (<button type="button"
                                                onClick={() => disconnect()}
                                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2">
                        Disconnect
                    </button>) : (<></>)}
                </div>
            </div>
        </div>
    );
}