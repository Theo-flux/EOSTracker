export function validator(data){
    const error = {};

    if (!data.account){
        error.account = "EOS Account can't be empty!";
    };

    if (!data.b_date){
        error.b_date = "Beginning date can't be empty!";
    };

    if (!data.e_date){
        error.e_date = "End date can't be empty!";
    };

    if (!data.m_unit){
        error.m_unit = "Monetary unit can't be empty!";
    };

    return error;
}