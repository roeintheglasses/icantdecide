import React from 'react'

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )


}
Header.defaultProps = {
    title: `I can't decide !!`
}
