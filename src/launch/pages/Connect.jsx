import React, {useEffect} from "react";

import {arbitrum, avalanche, bsc, fantom, gnosis, mainnet, optimism, polygon, polygonMumbai} from "wagmi/chains";
import {configureChains, createClient, goerli, useAccount, WagmiConfig} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum";
import {Web3Modal} from "@web3modal/react";
import Navbar from "../../components/Navbar";
import {useNavigate, useSearchParams} from "react-router-dom";
import ConnectWallet from "../../components/ConnectWallet";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_WC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [mainnet, polygon, avalanche, arbitrum, gnosis, bsc, optimism, fantom, goerli, polygonMumbai]

const {provider} = configureChains(chains, [walletConnectProvider({projectId}),])
const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({version: '1', appName: 'web3Modal', chains, projectId}),
    provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)


export default function Connect(props) {
    const {isConnected, isDisconnected} = useAccount()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        console.log(searchParams.get("forward"))
        if (isDisconnected) {
            //navigate("/connect")
        } else {
            if (isConnected) {
                navigate(searchParams.get("forward"))
            }
        }
    }, [isConnected, isDisconnected, navigate, searchParams])


    return (
        <div>
            <Navbar/>

            <WagmiConfig client={wagmiClient}>
                <ConnectWallet props={props}/>
            </WagmiConfig>

            <Web3Modal
                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </div>
    );
}