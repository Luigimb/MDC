function mostrarCuriosidad() {
            const curiosidades = [
                "El Mundial de Clubes 2025 será el primero con 32 equipos.",
                "Estados Unidos será la sede del torneo, igual que en el Mundial 2026.",
                "Algunos equipos clasificaron por ser campeones continentales.",
                "Habrá un total de 63 partidos en menos de un mes.",
                "Es el torneo de clubes más grande que ha organizado la FIFA hasta ahora."
            ];
            const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
            document.getElementById('curiosidad').innerText = aleatoria;
        }