// Initialisieren des Canvas-Kontexts für das Diagramm
// Wir greifen auf das Canvas-Element zu, das für das Chart verwendet wird.
const ctx = document.getElementById('ursachenChart').getContext('2d');

// Alle Jahre in die Labels einfügen
// Diese Labels enthalten alle Jahre von 1995 bis 2022, auch wenn nicht alle Jahre sichtbar sein sollen.
const allLabels = [
    '1995', '1996', '1997', '1998', '1999', '2000', 
    '2001', '2002', '2003', '2004', '2005', 
    '2006', '2007', '2008', '2009', '2010', 
    '2011', '2012', '2013', '2014', '2015', 
    '2016', '2017', '2018', '2019', '2020', 
    '2021', '2022'
];

// Daten für das Diagramm
// Wir erstellen mehrere Datensätze für verschiedene Schadstoffe. Jeder Datensatz wird als Linie dargestellt.
const data = {
    labels: allLabels, // Verwenden Sie alle Jahre als Labels, um sicherzustellen, dass der Tooltip korrekt funktioniert.
    datasets: [
        {
            label: 'Schwefeldioxid', // Name des Datensatzes
            data: [369.5, 312.9, 259.9, 207.3, 169.2, 136.3, 131.9, 118.5, 111.4, 103.2, 100.0, 99.9, 94.6, 93.8, 83.9, 82.2, 83.9, 79.3, 78.3, 76.0, 70.8, 71.2, 65.8, 63.6, 61.2, 54.8, 51, 53, 54], 
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Hintergrundfarbe der Linie (transparenter Rotton)
            borderColor: 'rgba(255, 99, 132, 1)', // Farbe der Linienumrandung
            borderWidth: 1, // Breite der Linienumrandung
            fill: false, // Kein Flächendiagramm (keine Fläche unter der Linie)
            tension: 0.1, // Glättung der Linie
            type: 'line' // Typ des Datensatzes (Linie)
        },
        {
            label: 'Stickoxide',
            data: [135.5, 130.3, 125.6, 123.7, 121.5, 116.7, 113.6, 109.6, 105.0, 101.2, 100.0, 104.4, 99.5, 97.9, 90.3, 91.1, 89.7, 89.7, 86.9, 86.0, 83.5, 79.9, 75.5, 69.9, 61, 60, 59, 58], 
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Hintergrundfarbe der Linie (transparenter Blauton)
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1, 
            fill: false, 
            tension: 0.1, 
            type: 'line' 
        },
        {
            label: 'Ammoniak',
            data: [101.2, 102.4, 102.4, 102.5, 102.4, 103.2, 104.1, 104.2, 103.5, 98.5, 100.0, 99.2, 100.7, 101.3, 101.7, 102.1, 102.1, 102.8, 103.6, 104.5, 103.6, 100.7, 96.1, 92.9, 86, 84, 82, 81], 
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Hintergrundfarbe der Linie (transparenter Grünton)
            borderColor: 'rgba(75, 192, 192, 1)', 
            borderWidth: 1, 
            fill: false, 
            tension: 0.1, 
            type: 'line' 
        },
        {
            label: 'NMVOC',
            data: [158.8, 152.1, 148.2, 144.3, 133.2, 121.8, 116.8, 113.6, 109.1, 103.7, 100.0, 100.4, 95.6, 91.7, 83.4, 92.1, 85.7, 84.6, 81.5, 78.5, 76.8, 76.3, 73.2, 71.4, 69, 71, 70, 69], 
            backgroundColor: 'rgba(153, 102, 255, 0.2)', // Hintergrundfarbe der Linie (transparenter Lilaton)
            borderColor: 'rgba(153, 102, 255, 1)', 
            borderWidth: 1, 
            fill: false, 
            tension: 0.1, 
            type: 'line' 
        },
        {
            label: 'Feinstaub (PM2.5)',
            data: [149.8, 148.0, 144.8, 132.7, 129.2, 122.9, 119.0, 118.6, 113.6, 108.8, 100.0, 100.3, 95.3, 93.0, 83.7, 88.4, 84.5, 84.6, 82.3, 76.6, 75.7, 75.3, 70.2, 66.6, 62, 63, 62, 61], 
            backgroundColor: 'rgba(255, 159, 64, 0.2)', // Hintergrundfarbe der Linie (transparenter Orangeton)
            borderColor: 'rgba(255, 159, 64, 1)', 
            borderWidth: 1, 
            fill: false, 
            tension: 0.1, 
            type: 'line' 
        }
    ]
};

// Konfiguration des Diagramms
// Hier wird die Tooltip-Konfiguration angepasst, um alle Jahre anzuzeigen, aber nur bestimmte Jahre auf der X-Achse sichtbar zu machen.
const config = {
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true, // Y-Achse beginnt bei Null
                title: {
                    display: true,
                    text: 'Index der Luftschadstoff-Emissionen (2005 = 100)' // Y-Achsentitel
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Jahr' // X-Achsentitel
                },
                ticks: {
                    callback: function(value, index) {
                        // Nur bestimmte Jahre anzeigen
                        const visibleYears = ['1995', '2000', '2005', '2010', '2015', '2020'];
                        return visibleYears.includes(allLabels[index]) ? allLabels[index] : '';
                    }
                }
            }
        },
        responsive: true, // Diagramm passt sich an die Fenstergröße an
        maintainAspectRatio: false, // Seitenverhältnis wird nicht beibehalten
        plugins: {
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        // Zeigt das Jahr für den entsprechenden Punkt im Tooltip an
                        return allLabels[tooltipItems[0].dataIndex];
                    },
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue;
                    }
                }
            }
        }
    }
};

// Erstellen des Diagramms mit den angegebenen Daten und Konfigurationen
const ursachenChart = new Chart(ctx, config);
