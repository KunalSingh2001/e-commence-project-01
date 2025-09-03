import React from 'react';
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Heading from '../Heading';
import "./Home.css"

function Home() {
    const concerts = [
        { id:1, date: "JUL 16", country: "DETROIT, MI", place: "DTE ENERGY MUSIC THEATRE" },
        { id:2, date: "JUL 19", country: "TORONTO, ON", place: "BUDWEISER STAGE" },
        { id:3, date: "JUL 22", country: "BRISTOW, VA", place: "JIGGY LUBE LIVE" },
        { id:4, date: "JUL 29", country: "PHOENIX, AZ", place: "AK-CHIN PAVILION" },
        { id:5, date: "AUG 2", country: "LAS VEGAS, NV", place: "T-MOBILE ARENA" },
        { id:6, date: "AUG 7", country: "CONCORD, CA", place: "CONCORD PAVILION" }
    ];

    return (
        <>
            <Header />
            <Heading />
            <table>
                <tbody>
                    {concerts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.country}</td>
                            <td>{item.place}</td>
                            <td><button className='btn btn-info' style={{color:"white"}}>BUY TICKETS</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </>
    );
}

export default Home;