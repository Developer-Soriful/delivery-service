import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'

const customIcon = new L.Icon({
    iconUrl: '../../public/map1.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    tooltipAnchor: [16, -16],
    className: 'custom-leaflet-icon',
})
const ZoomToDistrict = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
        if (coordinates) {
            map.setView(coordinates, 10, { animate: true });
        }
    }, [coordinates, map]);
    return null;
};


const BangladeshLIve = ({ loadData }) => {
    const [search, setSearch] = useState('')
    const [focusCoordinates, setFocusCoordinates] = useState(null);

    const searchFiltering = loadData.filter(district =>
        district.district.toLowerCase().includes(search.toLocaleLowerCase())
    )
    // this is for zooming 

    useEffect(() => {
        if (searchFiltering.length === 1) {
            setFocusCoordinates([searchFiltering[0].latitude, searchFiltering[0].longitude]);
        }
    }, [search]);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6  my-10 min-h-[400px]">
            <div className='flex flex-col gap-10'>
                <h2 className='text-[24px]  lg:text-[54px] font-bold'>We are available in 64 districts</h2>
                {/* create a search bar with input failds better desing  */}

                <div className="flex items-center gap-2 w-full max-w-xl bg-gray-100 rounded-full px-4 py-2 shadow-sm justify-start">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                        placeholder="Search district..."
                        className="flex-1 bg-transparent outline-none px-2 py-1 text-lg text-gray-700 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-[#b6e11a] hover:bg-[#a0c91a] text-[#003344] font-semibold px-6 py-2 rounded-full transition-colors duration-200"
                    >
                        Search
                    </button>
                </div>
                <h2 className=" mb-5 text-[#003344]">
                    We deliver almost all over Bangladesh
                </h2>
            </div>


            <div className="w-full h-[60vh] min-h-[350px] rounded-xl overflow-hidden">
                <MapContainer
                    center={[23.685, 90.3563]}
                    zoom={7}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {focusCoordinates && <ZoomToDistrict coordinates={focusCoordinates} />}
                    {searchFiltering.map((district, index) => (
                        <Marker
                            key={index}
                            position={[district.latitude, district.longitude]}
                            icon={customIcon}
                        >
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent={false}>
                                {district.district}
                            </Tooltip>
                            <Popup>
                                <h3>{district.district}</h3>
                                <p><strong>City:</strong> {district.city}</p>
                                <p><strong>Region:</strong> {district.region}</p>
                                <p><strong>Status:</strong> {district.status}</p>
                                <p><strong>Areas:</strong> {district.covered_area.join(', ')}</p>
                                <img src={district.flowchart} alt="Flowchart" width="100%" />
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default BangladeshLIve