import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { addToFavorites, removeFromFavorites } from '../../store/slices/favorite';
import { useDispatch, useSelector } from 'react-redux';
import  { useState, useEffect } from 'react';
// ... other imports

export default function PageDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorite);
    const [value, setValue] = useState(2);

    const isFavorite = (movie) => {
        return favorites.some((favMovie) => favMovie.id === movie.id);
    };

    const toggleFavorite = (movie) => {
        if (isFavorite(movie)) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    useEffect(() => {
        axiosInstance.get(`/${id}`)
            .then((res) => {
                setMovie(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="flex items-center justify-center m-5 text-center py-8">
            <Grid container spacing={4}>
                {movie && ( 
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className=''>
                            <CardMedia
                                sx={{ height: 270, objectFit: "cover" }}
                                component="img"
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title.substring(0, 40)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movie.overview.substring(0, 110)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    className={`btn 'btn-outline-primary'`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(movie);
                                    }}
                                >
                                    <i
                                        className={`fs-4 fas fa-heart mx-2 ${isFavorite(movie) ? 'text-danger' : 'text-warning'
                                            }`}
                                    ></i>
                                </Button>
                            </CardActions>
                            <Typography component="legend" mt={2}></Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
