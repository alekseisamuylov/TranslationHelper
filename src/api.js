import axios from "axios";

export async function getFiles() {
    const result = await fetch('http://localhost:3333');
    return result.json();
}

export function saveTranslate(data) {
    const result = fetch('http://localhost:3333', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return result;
}