import React, { useState, useEffect } from "react";
import type { Filament } from "../types/Filament";

interface Props {
    initial?: Filament | null;
    onSave: (filament: Filament) => void;
}

const FilamentForm: React.FC<Props> = ({ initial, onSave }) => {
    const [form, setForm] = useState<Filament>({
        name: "",
        description: "",
        amountUsed: 0,
        amountNew: 0,
        endTemp: 0,
        bedTemp: 0,
        manufacturer: "",
    });

    useEffect(() => {
        if (initial) setForm(initial);
    }, [initial]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name.includes("amount") || name.includes("Temp")
                ? Number(value)
                : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(form);
        setForm({
            name: "",
            description: "",
            amountUsed: 0,
            amountNew: 0,
            endTemp: 0,
            bedTemp: 0,
            manufacturer: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded mt-4">
            <h2 className="text-lg font-bold mb-2">
                {initial ? "Edit Filament" : "Add Filament"}
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="manufacturer">Manufacturer</label>
                    <input id="manufacturer" name="manufacturer" value={form.manufacturer} onChange={handleChange} placeholder="Manufacturer" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="amountUsed">Used (g)</label>
                    <input id="amountUsed" name="amountUsed" type="number" value={form.amountUsed} onChange={handleChange} placeholder="Used (g)" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="amountNew">New (g)</label>
                    <input id="amountNew" name="amountNew" type="number" value={form.amountNew} onChange={handleChange} placeholder="New (g)" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="endTemp">End Temp (°C)</label>
                    <input id="endTemp" name="endTemp" type="number" value={form.endTemp} onChange={handleChange} placeholder="End Temp (°C)" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="bedTemp">Bed Temp (°C)</label>
                    <input id="bedTemp" name="bedTemp" type="number" value={form.bedTemp} onChange={handleChange} placeholder="Bed Temp (°C)" />
                </div>
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                <textarea id="description" name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full mt-1" />
            </div>

            <button className="bg-blue-900 text-blue px-3 py-1 rounded mt-2" type="submit">
                {initial ? "Update" : "Add"}
            </button>
        </form>
    );
};

export default FilamentForm;
