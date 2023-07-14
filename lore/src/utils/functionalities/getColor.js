export const getColor = () => {
    const colors = ["#373737","#5A5A5A", "#603B2C", "#854C1D", "#89632A", "#2B593F", "#28456C", "#492F64", "#69314C", "#6E3630" ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}