import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/b9f2c7e5e64c9752c3a124aa/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          console.error('Failed to fetch conversion rates');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
