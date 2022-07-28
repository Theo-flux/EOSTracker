export async function fetchEosData(queryData, setApiData, setApiError, setLoading){
    setLoading(true)
    let { account, b_date, e_date } = queryData;

    let b_date_date = new Date(b_date.toString()).toLocaleDateString('zh-Hans-CN', {year: 'numeric', month: "2-digit", day:"2-digit"}).split("/").join("-");
    let b_date_time = new Date(b_date.toString()).toLocaleTimeString('en-US', { hour12: false });
    b_date = `${b_date_date}T${b_date_time}.000`

    let e_date_date = new Date(e_date.toString()).toLocaleDateString('zh-Hans-CN', {year: 'numeric', month: "2-digit", day:"2-digit"}).split("/").join("-");
    let e_date_time = new Date(e_date.toString()).toLocaleTimeString('en-US', { hour12: false });
    e_date = `${e_date_date}T${e_date_time}.000`
    
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