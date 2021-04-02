import React from 'react'
import { useMissionsInfoQuery } from './../../generated/graphql';
import { MissionList } from './MissionList'

export const MissionContainer = () => {
    const {loading, error, data} = useMissionsInfoQuery();

    if(loading)
    return <h1>Loading...</h1>

    if(error || !data)
    return <h1>Error</h1>

    //console.log(data)

    return(
        <MissionList data={data} />
    )

}
