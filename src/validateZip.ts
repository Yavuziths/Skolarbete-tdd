export function validateZip(zip: string): boolean {
    const regex = /^\d{5}$/;
    return regex.test(zip);
  }
