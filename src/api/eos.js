import formatMyTimestamp from "../helpers/dateTime";

export async function fetchEosData(queryData, setApiData, setApiError, setLoading){
    setLoading(true)
    let { account, b_date, e_date } = queryData;
    b_date = formatMyTimestamp(b_date);
    e_date = formatMyTimestamp(e_date);
    
    const eosUrl = `https://eos.hyperion.eosrio.io/v2/history/get_actions?account=${account}&act.name=transfer&limit=1000&after=${b_date}&before=${e_date}`;

    try {
        const res = await fetch(eosUrl, {
            method: 'Get',
            headers: {
                Accept: 'applications/json'
            }
        })

        if (!res.ok){
            setApiError(`Error status!: ${res.status}`)
        }

        const data = await res.json();
        setApiData(data.actions)
    }
    catch (err){
        setApiError(err.message)
    }
    finally {
        setLoading(false);
    }
}