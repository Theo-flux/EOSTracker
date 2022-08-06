import formatMyTimestamp from "../helpers/dateTime";

export async function fetchPolyPrice(queryData, setPolyPrices, setPolyPriceError, setPolyLoading){
    setPolyLoading(true)
    let { b_date } = queryData;
    b_date = formatMyTimestamp(b_date, false);

    console.log(b_date)
    
    const polyUrl = `https://api.polygon.io/v3/trades/X:EOS-USD?timestamp=${b_date}&order=desc&limit=1000&sort=timestamp&apiKey=tNkhMKqxm64EtPfoKq2TJLuk9MmlytP5`;

    try {
        const res = await fetch(polyUrl, {
            method: 'Get',
            headers: {
                Accept: 'applications/json'
            }
        })

        if (!res.ok){
            setPolyPriceError(`Error status!: ${res.status}`)
        }

        const data = await res.json();
        setPolyPrices(data.results)
    }
    catch (err){
        setPolyPriceError(err.message)
    }
    finally {
        setPolyLoading(false);
    }
}