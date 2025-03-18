export const normalizeDataByDate = (transactions: any[]) => {
  const grouped = transactions.reduce((acc, curr) => {
    const date = curr.date;
    if (!acc[date]) acc[date] = [];

    acc[date].push(curr);
    return acc;
  }, {});

  //Here we are sorting the dates by year, most recent year comes first
  return Object.fromEntries(
    Object.entries(grouped).sort(([dateA], [dateB]) => {
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }),
  );
};
