export function useRegistry() {
  const getComponentRegistryUrl = (name: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/r/${name}.json`;
  };

  return { getComponentRegistryUrl };
}
