import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


export default function CardLab (props) {
    
    const useStyles = makeStyles({
        root: {
            width: '50%',
            background: '#606060',
            margin: 'auto',
            borderRadius: '30px'
        }, 
        contenido: {
            color: 'white'
        },
    
    });
    const classes = useStyles();
    const estilo = {
        alLado: {
            display: 'inline-block'
        }
    }

    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.contenido} style = {{fontFamily: "'Roboto Slab', 'serif'"}}>
                    <div> 
                        <h2 style = {estilo.alLado}> Text:  </h2>  {props.text} 
                    </div>
                    <div> 
                        <h2 style = {estilo.alLado}> Priority:  </h2> {props.priority} 
                        </div>
                    <div> 
                        <h2 style = {estilo.alLado}> Duedate:  </h2> {props.dueDate} 
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
    
}