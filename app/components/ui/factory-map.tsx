"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

// Fix for default marker icon in Next.js/Webpack
const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMarker {
    position: [number, number];
    title: string;
    description: string;
}

const locations: LocationMarker[] = [
    {
        position: [-7.3108, 112.7760], // Sidoarjo HQ
        title: "Pabrik Sidoarjo (HQ)",
        description: "Jl. Tambaksawah 21-23, Waru - Sidoarjo 61256",
    },
    {
        position: [-6.3050, 106.9833], // Bekasi
        title: "Pabrik Bekasi",
        description: "Jl. Narogong KM.7, Cipendawa No. 7, Bekasi 17117",
    },
    {
        position: [3.5952, 98.6722], // Medan
        title: "Pabrik Medan",
        description: "Jl. Raya Medan - Tanjung Morawa KM. 12.5, Sumatera Utara",
    },
];

// Component to handle Ctrl+Scroll zoom
function ScrollWheelHandler() {
    const map = useMap();
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const container = map.getContainer();
        let hintTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                // Allow zoom when Ctrl is pressed
                e.preventDefault();
                const delta = e.deltaY > 0 ? -1 : 1;
                map.zoomIn(delta);
            } else {
                // Show hint message
                setShowHint(true);
                clearTimeout(hintTimeout);
                hintTimeout = setTimeout(() => setShowHint(false), 2000);
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            clearTimeout(hintTimeout);
        };
    }, [map]);

    return showHint ? (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center pointer-events-none">
            <div className="bg-black/70 text-white px-6 py-3 rounded-lg text-sm font-medium backdrop-blur-sm">
                Gunakan <kbd className="px-2 py-1 bg-white/20 rounded mx-1">Ctrl</kbd> + scroll untuk zoom
            </div>
        </div>
    ) : null;
}

export default function FactoryMap() {
    // Center on Indonesia
    const centerPosition: [number, number] = [-2.5, 108.0];

    return (
        <MapContainer
            center={centerPosition}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
            className="rounded-lg"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, idx) => (
                <Marker key={idx} position={loc.position}>
                    <Popup>
                        <div className="text-sm">
                            <strong className="text-[#0C4DA2]">{loc.title}</strong>
                            <p className="text-gray-600 mt-1">{loc.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
            <ScrollWheelHandler />
        </MapContainer>
    );
}
