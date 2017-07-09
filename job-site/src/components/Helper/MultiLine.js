import React from 'react'

export default function MultiLine(data,char='► '){
        return (data.split("\n").map(
                (item,key) => {
                    return (
                        <p key={key}>{char+item}</p>

                    )
                }
            )
        )
}

