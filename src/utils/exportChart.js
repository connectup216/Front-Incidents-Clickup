import jsPDF from "jspdf";

export const exportChart = (e, chart, title) => {
    e.preventDefault()
    const image = chart.current.canvas.toDataURL('image/png', 1.0);

    const pdf = new jsPDF('landscape');
    pdf.addImage(image, 'PNG', 50, 10, 180, 180);
    pdf.save(`${title}.pdf`);
}