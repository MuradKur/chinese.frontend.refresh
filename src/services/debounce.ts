export function debounce(func: any, delay: number) {
  let timeout: any;
  return (...args: any) => {
    console.log('opopopeodwdweded');
    // @ts-ignore
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
