import React from 'react';
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Heading from '../Heading';
import "./Home.css"

function Home() {
    const concerts = [
        { date: "JUL 16", country: "DETROIT, MI", place: "DTE ENERGY MUSIC THEATRE" },
        { date: "JUL 19", country: "TORONTO, ON", place: "BUDWEISER STAGE" },
        { date: "JUL 22", country: "BRISTOW, VA", place: "JIGGY LUBE LIVE" },
        { date: "JUL 29", country: "PHOENIX, AZ", place: "AK-CHIN PAVILION" },
        { date: "AUG 2", country: "LAS VEGAS, NV", place: "T-MOBILE ARENA" },
        { date: "AUG 7", country: "CONCORD, CA", place: "CONCORD PAVILION" }
    ];

    return (
        <>
            <Header />
            <Heading />
                <table>
                    <tbody>
                        {concerts.map((item) => (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.country}</td>
                                <td>{item.place}</td>
                                <tb><button className='btn btn-info' style={{color:"white"}}>BUY TICKETS</button></tb>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <Footer />
        </>
    );
}

export default Home;