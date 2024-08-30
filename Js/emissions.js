// Initialisieren des Canvas-Kontexts für das Diagramm
const ctx = document.getElementById('emissionsChart').getContext('2d');

// Ursprüngliche Daten für das Diagramm
const originalData = [183.0, 167.7, 155.0, 142.1, 131.1, 120.2, 116.6, 110.6, 105.9, 101.9, 100.0, 100.9, 97.2, 95.5, 88.3, 91.5, 88.2, 87.8, 86.6, 83.5, 82.8, 80.1, 78.2, 75.3, 71.1, 65.8, 66.0, 66, '', '', '', '', '', '', '', 55.0];
const originalLabels = [
    '1995', '1996', '1997', '1998', '1999', '2000', 
    '2001', '2002', '2003', '2004', '2005', 
    '2006', '2007', '2008', '2009', '2010', 
    '2011', '2012', '2013', '2014', '2015', 
    '2016', '2017', '2018', '2019', '2020', 
    '2021', '2022', '2023', '2024', '2025', 
    '2026', '2027', '2028', '2029', '2030'
];

// Daten für das Diagramm
const data = {
    labels: originalLabels,
    datasets: [
        {
            label: 'Mittelwert (Linie)',
            data: originalData,
            backgroundColor: 'rgba(255, 206, 86, 0.2)', 
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            fill: false,
            tension: 0.1,
            type: 'line' // Typ als Linie
        },
        {
            label: 'Mittelwert (Balken)',
            data: originalData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
            type: 'bar' // Typ als Balken
        }
    ]
};

// Konfiguration des Diagramms
const config = {
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Index der Luftschadstoff-Emissionen (2005 = 100)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Jahr'
                },
                ticks: {
                    callback: function(value, index) {
                        // Nur bestimmte Jahre anzeigen
                        const visibleYears = ['1995', '2000', '2005', '2010', '2015', '2020', '2030'];
                        return visibleYears.includes(originalLabels[index]) ? originalLabels[index] : '';
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        // Zeigt das Jahr für den entsprechenden Punkt an
                        return originalLabels[tooltipItems[0].dataIndex];
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
const emissionsChart = new Chart(ctx, config);

// Funktion zur Aktualisierung des Diagramms und Textinhalts basierend auf der Auswahl des Benutzers
function updateChart(year) {
    let newData;
    let newLabels;
    let newText;

    switch(year) {
        case '2000':
            newData = originalData.slice(0, 6); // Daten bis 2000
            newLabels = originalLabels.slice(0, 6);
            newText = 'Bis zum Jahr 2000 hat Deutschland bemerkenswerte Fortschritte bei der Reduzierung von Luftschadstoffen erzielt. Besonders entscheidend war die Einführung des Bundes-Immissionsschutzgesetzes, das strenge Grenzwerte für industrielle Emissionen festlegte. In den 1990er Jahren wurden außerdem viele Kohlekraftwerke modernisiert, um den Ausstoß von Schwefeldioxid erheblich zu verringern. Diese Maßnahmen führten zu einem signifikanten Rückgang der Emissionen, wie im Diagramm zu erkennen ist.';
            break;
        case '2005':
            newData = originalData.slice(0, 11); // Daten bis 2005
            newLabels = originalLabels.slice(0, 11);
            newText = 'Zwischen 2000 und 2005 setzte Deutschland die Modernisierung von Industrieanlagen fort und förderte verstärkt den Ausbau erneuerbarer Energien. Ein wichtiger Schritt in dieser Zeit war der Ausstieg aus der Steinkohlesubventionierung, was zu einer weiteren Verringerung der Schwefeldioxid-Emissionen führte. Zusätzlich wurde der Verkehr in städtischen Gebieten durch die Einführung von Umweltzonen reguliert, was eine deutliche Senkung der Stickoxid- und Feinstaubbelastung zur Folge hatte.';
            break;
        case '2010':
            newData = originalData.slice(0, 16); // Daten bis 2010
            newLabels = originalLabels.slice(0, 16);
            newText = 'Von 2005 bis 2010 legte Deutschland den Grundstein für den umfangreichen Ausbau erneuerbarer Energien. Das Erneuerbare-Energien-Gesetz (EEG) wurde eingeführt, um den Bau von Wind- und Solaranlagen zu fördern. Diese Maßnahmen verringerten die Abhängigkeit von fossilen Brennstoffen erheblich, was sich in den sinkenden Emissionen widerspiegelt, die im Diagramm sichtbar sind.';
            break;
        case '2015':
            newData = originalData.slice(0, 21); // Daten bis 2015
            newLabels = originalLabels.slice(0, 21);
            newText = 'Zwischen 2010 und 2015 verstärkte Deutschland seine Anstrengungen zur Reduktion von Luftschadstoffen. Der Atomausstieg und die verstärkte Nutzung von Erdgas als Übergangstechnologie trugen zur weiteren Senkung der Emissionen bei. Gleichzeitig wurden strengere Emissionsstandards für Fahrzeuge eingeführt, um die Luftqualität in städtischen Gebieten weiter zu verbessern.';
            break;
        case '2020':
            newData = originalData.slice(0, 26); // Daten bis 2020
            newLabels = originalLabels.slice(0, 26);
            newText = 'Zwischen 2015 und 2020 wurden weitere Maßnahmen zur Reduktion der Emissionen umgesetzt. Der verstärkte Ausbau der Elektromobilität und die Förderung energieeffizienter Gebäude spielten eine zentrale Rolle. Das Diagramm zeigt, dass die Emissionen weiterhin sinken, was auf die konsequente Umsetzung von Klimaschutzmaßnahmen zurückzuführen ist.';
            break;
        case '2030':
            // Zurücksetzen auf die Originaldaten und Originaltext
            newData = originalData;
            newLabels = originalLabels;
            newText = 'Bis 2030 plant Deutschland, die Emissionen weiter zu reduzieren, um die Klimaziele zu erreichen. Zu den geplanten Maßnahmen gehören die vollständige Abschaltung der Kohlekraftwerke, der massive Ausbau erneuerbarer Energien und die Einführung einer flächendeckenden Elektromobilität. Diese ambitionierten Ziele sollen sicherstellen, dass Deutschland einen bedeutenden Beitrag zur globalen Reduktion von Treibhausgasen leistet und gleichzeitig die Luftqualität nachhaltig verbessert.';
            break;
        default:
            break;
    }

    // Aktualisieren der Daten und Labels im Diagramm
    emissionsChart.data.labels = newLabels;
    emissionsChart.data.datasets.forEach((dataset) => {
        dataset.data = newData;
    });
    emissionsChart.update();

    // Aktualisieren des Textinhalts
    document.querySelector('.text-container p').innerText = newText;
}

// Event Listener für die Buttons
document.querySelectorAll('.year-selection button').forEach(button => {
    button.addEventListener('click', () => {
        updateChart(button.innerText.split(' ')[1]);
    });
});
