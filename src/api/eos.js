export async function fetchEosData(queryData){
    const { account, b_date, e_date } = queryData;
    const eosUrl = `https://eos.hyperion.eosrio.io/v2/history/get_actions?account=${account}after=${b_date}&before=${e_date}&limit=1000`;
    let eosResult = ""

    await fetch(eosUrl)
    .then((res) => res.json())
    .then((data) => eosResult = data)
    .catch((error) => eosResult =  error)

    return eosResult;
}