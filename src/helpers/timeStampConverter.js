export function timeStampToTime(timestamp){
    return new Date(timestamp.toString()).toLocaleTimeString('en-US', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
}

export function timeStampToDate(timestamp){
    return new Date(timestamp.toString()).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'});
}

export function dateFromPolyTimestamp(timestamp) {
    let fTime = new Date(timestamp).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'})

    return fTime.toString();
}