export const createFilterQueryString = (filters: Record<string, any>, isSearch?: boolean): string => {
   const queryParts: string[] = [];

   for (const [key, value] of Object.entries(filters)) {
      if (Array.isArray(value)) {
         value.forEach(val => {
            queryParts.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`);
         });
      } else if (value !== null && value !== undefined) {
         queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
   }

   return queryParts.length > 0 ? `${isSearch ? '?' : ''}${queryParts.join('&')}` : '';
};
