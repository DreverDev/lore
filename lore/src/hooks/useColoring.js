export const useColoring = () => {

    const getColor = (array) => {
        const hue = Math.floor(Math.random() * 360); // Tonos de color aleatorios
        const saturation = Math.floor(Math.random() * 30) + 70; // Saturación entre 70 y 100
        const lightness = Math.floor(Math.random() * 10) + 60; // Claridad entre 60 y 70
        return  `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    const getColors = (items) => {
        let colors = [];

        for (var i = 0; i < items; i++) {
            var hue = Math.floor(Math.random() * 360); // Tonos de color aleatorios
            var saturation = Math.floor(Math.random() * 30) + 70; // Saturación entre 70 y 100
            var lightness = Math.floor(Math.random() * 10) + 60; // Claridad entre 60 y 70

            var color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            colors.push(color);
        }

        return colors;
    }

    return {
        getColors,
        getColor,
    }
}