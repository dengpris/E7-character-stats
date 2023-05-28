import { Link } from "react-router-dom";

function Builds() {
    return (
        <>
        {/* Character Stats Image */}
            <div className="col-lg-4 mb-3">
                <div className="card">
                    <img src="#"/>
                </div>
            </div>
        {/* Artifact and EE */}
            <div className="artifact"></div>
            <div className="ee"></div>
        {/* Gear Pieces Grid */}
            <div className="col-lg-4 mb-3">
                <div className="sword"></div>
                <div className="helm"></div>
                <div className="chest"></div>
                <div classname="neck"></div>
                <div className="ring"></div>
                <div className="boots"></div>
            </div>
        </>
    )
}

function BuildsList() {
    return (
        <>
        </>
    )
}

export default BuildsList;