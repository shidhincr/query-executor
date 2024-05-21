const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const responses = {
  customers: () => import("./customers.json").then((m) => m.default),
  suppliers: () => import("./suppliers.json").then((m) => m.default),
  employees: () => import("./employees.json").then((m) => m.default),
  orders: () => import("./orders.json").then((m) => m.default),
  empty: () => import("./empty-results.json").then((m) => m.default),
} as const;

type responseTypes = keyof typeof responses;

const getDummyResponse = (key: responseTypes) => {
  return responses[key]();
};

export const executeQuery = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _query: string,
): Promise<Record<string, string>[]> => {
  const data = Object.keys(responses) as responseTypes[];
  const randomData = data[Math.floor(Math.random() * data.length)];
  await delay(2000);
  return getDummyResponse(randomData);
};
