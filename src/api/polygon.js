import formatMyTimestamp from "../helpers/dateTime";

export async function fetchPolyPrice(queryData, setPolyPrices, setPolyPriceError, setPolyLoading){
    setPolyLoading(true)
    let { b_date, e_date } = queryData;
    b_date = formatMyTimestamp(b_date, false);
    e_date = formatMyTimestamp(e_date, false);
    
    const polyUrl = `https://api.polygon.io/v2/aggs/ticker/X:EOSUSD/range/1/day/${b_date}/${e_date}?adjusted=true&sort=desc&limit=1000&apiKey=tNkhMKqxm64EtPfoKq2TJLuk9MmlytP5`;

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