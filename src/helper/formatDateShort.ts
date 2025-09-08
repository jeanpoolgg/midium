export function formatDateShort(isoDate: string): string {
    const date = new Date(isoDate);
  
    const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date);
    const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date);
    const year = date.getFullYear();
  
    const currentYear = new Date().getFullYear();
  
    if (year === currentYear) {
      return `${month} ${day}`; // Ej: "Jun 23"
    }
  
    return `${month} ${day}, ${year}`; // Ej: "Jun 23, 2022"
  }
  