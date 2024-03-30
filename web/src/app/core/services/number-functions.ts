export function calculateRestMultiple100ScrollY(number: number): number {
    if (number % 100 === 0) {
      return 0;
    } else {
      const nextMultiple100 = Math.ceil(number / 100) * 100; 
      const rest = nextMultiple100 - number;
      
      return rest;
    }
  }