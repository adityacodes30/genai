import stl from './styles/button.module.css'

export default function Button(props:any) {
    return (
        <button className={stl.btn} >{props.text}</button>
    )
}