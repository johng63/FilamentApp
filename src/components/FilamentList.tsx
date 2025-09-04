import React from "react";
import type { Filament } from "../types/Filament";

interface Props {
    filaments: Filament[];
    onEdit: (f: Filament) => void;
}

const FilamentList: React.FC<Props> = ({ filaments, onEdit }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">My Filaments</h2>
            <table className="w-full border mt-2">
                <thead>
                    <tr className="bg-gray-100">
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Used (g)</th>
                        <th>New (g)</th>
                        <th>End Temp (°C)</th>
                        <th>Bed Temp (°C)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filaments.map((f) => (
                        <tr key={f.id}>
                            <td>{f.name}</td>
                            <td>{f.manufacturer}</td>
                            <td>{f.amountUsed}</td>
                            <td>{f.amountNew}</td>
                            <td>{f.endTemp}</td>
                            <td>{f.bedTemp}</td>
                            <td>
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                    onClick={() => onEdit(f)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                    {filaments.length === 0 && (
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-gray-500">
                                No filaments found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FilamentList;
