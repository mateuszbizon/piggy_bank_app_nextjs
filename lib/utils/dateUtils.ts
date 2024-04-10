export function formatDate(date: Date): string {
    const day = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
    const month = `${date.getMonth() < 10 ? "0" : ""}${date.getMonth() + 1}`;
    const year = `${date.getFullYear()}`;

    return `${day}-${month}-${year}`;
}