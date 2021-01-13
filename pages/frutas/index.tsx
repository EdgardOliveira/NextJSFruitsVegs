import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        table: {
            minWidth: 650,
        },
    }),
);

function Frutas({frutas}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>Frutas e Vegetais</Paper>
                </Grid>
                <Grid container spacing={1}>
                    {frutas?.map((fruta, index) => (
                        <Grid item xs={3} key={index}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={fruta.tfvname}
                                        height="140"
                                        image={fruta.imageurl}
                                        title={fruta.tfvname}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {fruta.botname}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {fruta.othname}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Compartilhe
                                    </Button>
                                    <Link href={'frutas/' + fruta.tfvname}>
                                        <Button size="small" color="primary">
                                            Saiba mais
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

Frutas.getInitialProps = async () => {
    const res = await fetch('http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?search=all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    });
    const json = await res.json();
    const frutas = await json.results;
    return {frutas: frutas}
}

export default Frutas;