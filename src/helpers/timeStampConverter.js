
const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const locale = Intl.DateTimeFormat().resolvedOptions().locale

export function timeStampToTime(timestamp){
    return new Date(timestamp.toString()).toLocaleTimeString(locale, {timeZone: zone, hour12:true, hour:'numeric', minute:'numeric'})
}

export function timeStampToDate(timestamp){
    return new Date(timestamp.toString()).toLocaleDateString(locale, {timeZone: zone, month: 'numeric', day: 'numeric', year: 'numeric'});
}

export function dateFromEosTimestamp(timestamp) {
    let fDate = new Date(timestamp.toString()).toLocaleDateString(locale, {timeZone: zone, month: 'numeric', day: 'numeric', year: 'numeric'});
    let fTime = new Date(timestamp.toString()).toLocaleTimeString(locale, {timeZone: zone, hour:'numeric'})

    return `${fDate}|${fTime}`;
}

export function dateFromPolyTimestamp(timestamp) {
    let fDate = new Date(timestamp).toLocaleDateString(locale, {timeZone: zone, month: 'numeric', day: 'numeric', year: 'numeric'})
    let fTime = new Date(timestamp).toLocaleTimeString(locale, {timeZone: zone, hour:'numeric'})

    return `${fDate}|${fTime}`;
}