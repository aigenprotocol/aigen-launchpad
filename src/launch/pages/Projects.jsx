import React, {useEffect} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useAccount} from "wagmi";
import {createSearchParams, useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner";

export default function Projects() {
    const {
        isConnected,
        isDisconnected
    } = useAccount()
    const navigate = useNavigate();

    useEffect(() => {
        if (isDisconnected) {
            navigate({
                pathname: "/connect",
                search: createSearchParams(
                    {forward: "/"}
                ).toString()
            })
        } else {
            if (isConnected) {
                // fetch projects
            }
        }
    }, [isConnected, isDisconnected, navigate])

    return (
        <> {
            isConnected ? (
                <div className="max-w-7xl mx-auto">
                    <Navbar/>
                    <div className="text-xl ml-4 text-xl">
                        Projects
                    </div>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <Spinner/>
                </div>
            )
        } </>
    );
}