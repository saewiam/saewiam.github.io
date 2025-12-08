import classes from './image.module.css'

interface ImageProps{
    src: string;
    caption: string;
}

export default function Image(props: ImageProps){
    return (
        <div className={classes.image}>
            <img src={props.src} alt={props.caption}/>
            <p>{props.caption}</p>
        </div>
        );
}

<Image src={'something.png'} caption={'a string of text'}/>