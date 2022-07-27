export async function fetchEosData(queryData){
    const { account, b_date, e_date } = queryData;
    const eosUrl = `https://eos.hyperion.eosrio.io/v2/history/get_actions?account=${account}&act.name=transfer&after=${b_date}T00:00:00.000&before=${e_date}T00:00:00.000&limit=1000`;
    let eosResult = ""

    await fetch(eosUrl)
    .then((res) => res.json())
    .then((data) => eosResult = data)
    .catch((error) => eosResult =  error)

    return eosResult;
}