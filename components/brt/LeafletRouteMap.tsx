'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon paths broken by webpack
function fixLeafletIcons() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

const STOPS: [string, string, [number, number]][] = [
  ['세종 한별동', '출발 — 세종 광역BRT 정류장\n환승: 세종 BRT 간선·지선', [36.4998, 127.262]],
  ['공주종합버스터미널', '도착 — 공주시 거점 정류장\n환승: 공주 시내버스 전 노선', [36.4537, 127.1247]],
];

const LINE_POSITIONS: [number, number][] = STOPS.map(([, , pos]) => pos);

const createCustomIcon = (label: string, color: string) =>
  L.divIcon({
    className: '',
    html: `<div style="
      background:${color};
      color:white;
      padding:4px 10px;
      border-radius:20px;
      font-size:11px;
      font-weight:700;
      font-family:Pretendard,-apple-system,sans-serif;
      white-space:nowrap;
      box-shadow:0 2px 8px rgba(0,0,0,0.25);
      border:2px solid white;
    ">${label}</div>`,
    iconAnchor: [40, 14],
    popupAnchor: [0, -20],
  });

export default function LeafletRouteMap() {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const center: [number, number] = [
    (STOPS[0][2][0] + STOPS[1][2][0]) / 2,
    (STOPS[0][2][1] + STOPS[1][2][1]) / 2,
  ];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-[#E2DDD6] dark:border-[#2A2A2A] shadow-sm"
      style={{ height: 380 }}
      role="img"
      aria-label="세종 한별동 ~ 공주 종합버스터미널 BRT 노선 지도"
    >
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        aria-label="BRT 노선 지도"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          positions={LINE_POSITIONS}
          pathOptions={{ color: '#6B4423', weight: 4, opacity: 0.85, dashArray: undefined }}
        />
        {STOPS.map(([name, info, pos]) => (
          <Marker
            key={name}
            position={pos}
            icon={createCustomIcon(name, '#6B4423')}
          >
            <Popup>
              <div style={{ fontFamily: 'Pretendard, sans-serif', minWidth: 160 }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4, color: '#6B4423' }}>{name}</div>
                <div style={{ fontSize: 11, color: '#555', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{info}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
