// Simuliert eine Datenbank oder API-Antwort
// In einer echten Anwendung würden diese Daten von einem Server kommen.
const employeeData = {
    "tauchmann": {
        fullName: "Yannick Tauchmann",
        position: "Geschäftsführer & Gründer",
        department: "Sales",
        photoUrl: "me.jpg", // Pfad zum Foto
        validUntil: "2027-12-31" // Beispiel Gültigkeitsdatum
    },
    "fritzsche": {
        fullName: "Luca Fritzsche",
        position: "Geschäftsführer & Gründer",
        department: "Sales",
        photoUrl: "images/max_mustermann.jpg",
        validUntil: "2024-06-30" // Beispiel abgelaufenes Datum
    },
    "reif": {
        fullName: "Nico Reif",
        position: "Vertriebler",
        department: "Sales",
        photoUrl: "images/sabine_bauer.jpg",
        validUntil: "2026-08-15"
    }
    // Füge hier weitere Mitarbeiter hinzu
};

// Funktion zum Abrufen von URL-Parametern
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Funktion zur Anzeige der Mitarbeiterdaten
function displayEmployeeInfo() {
    const employeeId = getQueryParam('id'); // Holt den Wert des 'id'-Parameters aus der URL
    const infoContainer = document.getElementById('employee-info');
    const currentYearSpan = document.getElementById('current-year');

    // Aktuelles Jahr im Footer setzen
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (!employeeId) {
        infoContainer.innerHTML = '<div class="not-found">Keine Mitarbeiter-ID in der URL angegeben.</div>';
        return;
    }

    const employee = employeeData[employeeId];

    if (employee) {
        // Mitarbeiter gefunden, Daten anzeigen
        const today = new Date().toISOString().split('T')[0]; // Heutiges Datum im Format YYYY-MM-DD
        const isValid = employee.validUntil >= today;
        const validityClass = isValid ? 'valid' : 'expired';
        const validityText = isValid ? 'Gültig bis' : 'Abgelaufen am';

        infoContainer.innerHTML = `
            <div class="employee-card">
                <img src="${employee.photoUrl}" alt="Foto von ${employee.fullName}" class="employee-photo">
                <div class="employee-details">
                    <h2>${employee.fullName}</h2>
                    <p><strong>Position:</strong> ${employee.position}</p>
                    <p><strong>Abteilung:</strong> ${employee.department}</p>
                    <div class="validity ${validityClass}">
                        <p><strong>Status:</strong> Ausweis ${validityText} ${new Date(employee.validUntil).toLocaleDateString('de-DE')}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Mitarbeiter nicht gefunden
        infoContainer.innerHTML = '<div class="not-found">Mitarbeiter nicht gefunden.</div>';
    }
}

// Warten, bis das DOM vollständig geladen ist, dann die Funktion ausführen
document.addEventListener('DOMContentLoaded', displayEmployeeInfo);