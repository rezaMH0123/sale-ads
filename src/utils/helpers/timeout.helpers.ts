export const delay = (timeout: number = 1000) => {
   return new Promise((res, _) => {
      const timer = setTimeout(() => {
         res(null)
         clearTimeout(timer)
      }, timeout);
   })
}