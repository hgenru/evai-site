import { onCleanup, onMount } from 'solid-js';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
  let el: HTMLDivElement | undefined;
  let map: any;
  onMount(async () => {
    const L = await import('leaflet');
    // Rough center for Yerevan; will adjust via marker.
    const center = [40.1776, 44.5126] as [number, number];
    map = L.map(el!, { zoomControl: true }).setView(center, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // If you have exact coords for Lusinyants 2, replace below.
    // Approximate position near Lusinyants St, Yerevan.
    const approx = [40.19292, 44.51835] as [number, number];
    const marker = L.marker(approx, {
      title: 'Ереван, ул. Лусинянц, 2 — частный театр «Артен»'
    }).addTo(map);
    marker.bindPopup('Ереван, ул. Лусинянц, 2 — частный театр «Артен»');
    map.setView(approx, 17);
  });
  onCleanup(() => {
    if (map) map.remove();
  });
  return <div id="map" ref={el} />;
}

