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
import {NextApiRequest} from "next";
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

function Fruta({fruta}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>Frutas e Vegetais</Paper>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={fruta.botname}
                                    height="140"
                                    image={fruta.imageurl}
                                    title={fruta.botname}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {fruta.botname}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.othname}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.uses}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.propagation}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.soil}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.climate}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {fruta.health}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link href={'/frutas'}>
                                    <Button size="small" color="primary">
                                        Voltar
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

Fruta.getInitialProps = async (req: NextApiRequest) => {
    const {fruta} = req.query;
    const res = await fetch(`http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=${fruta}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    });

    const json = await res.json();

    if (json.tfvcount === 1) {
        const fruta = await json.results[0];
        return {fruta: fruta}
    } else {
        console.log("Essa fruta/vegetal não existe no banco de dados!");
        return {props: {id: -1}}
    }
}

export default Fruta;