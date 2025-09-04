import type { Filament } from "../types/Filament";

const API_BASE = "http://localhost:8000"; // adjust to backend

export async function getFilamentList(): Promise<Filament[]> {
    const res = await fetch(`${API_BASE}/filaments`);
    if (!res.ok) throw new Error("Failed to fetch filaments");
    return res.json();
}

export async function putFilament(filament: Filament): Promise<Filament> {
    const res = await fetch(`${API_BASE}/filaments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filament),
    });
    if (!res.ok) throw new Error("Failed to add filament");
    return res.json();
}

export async function updateFilament(filament: Filament): Promise<Filament> {
    if (!filament.id) throw new Error("Missing filament ID");
    const res = await fetch(`${API_BASE}/filaments/${filament.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filament),
    });
    if (!res.ok) throw new Error("Failed to update filament");
    return res.json();
}
