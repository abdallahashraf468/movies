import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/slices/favorite';
import { moviesAction } from '../../store/slices/movies';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// ... (imports)

export default function List() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorite);
    const movies = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(moviesAction(page));
    }, [dispatch, page]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const [value, setValue] = useState(2);

    const isFavorite = (movie) => favorites.some((favMovie) => favMovie.id === movie.id);

    const toggleFavorite = (movie) => {
        if (isFavorite(movie)) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };



    return (
        <>
        <div className='mb-6 mt-6'></div>
            <Grid className='mb-6' container spacing={4}>
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className='mx-2 '>
                            <CardMedia

                                sx={{ height: 270, objectFit: "cover" }}
                                component="img"
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                            <CardContent className='hover:bg-teal-900 hover:text-white font-normal hover:font-bold text-center '>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title.substring(0, 40)}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movie.overview.substring(0, 110)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className="basis-1/4 hover:basis-1/3"
                                    variant="contained"
                                    color="success"
                                    onClick={() => navigate(`/details/${movie.id}`)}>Details</Button>
                                <Button
                                    className={`btn 'btn-outline-primary'`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(movie);
                                    }}
                                >
                                    <FavoriteIcon
                                        className={` mx-2 ${isFavorite(movie) ? 'text-midnight2' : 'text-midnight'}`}
                                    ></FavoriteIcon>

                                </Button>
                            </CardActions>
                            <div className='flex mx-2 py-5'>
                                <Typography component="legend" mt={2}></Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={movie.vote_average}
                                    className='mr-3 '
                                />
                                <p className='ml-3'>This is Popularity: <span className='text-red-900'>{String(movie.popularity).substring(0, 6)}</span></p>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <div className='flex justify-around py-8'>
                <Button className=" w-28"
                    color="secondary"
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    variant="contained"

                >
                    Prev
                </Button>

                <Stack spacing={2}>
                <Pagination
                    count={movies.length}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
                />
            </Stack>
                <Button

                    className=" w-28"
                    variant="contained"
                    onClick={handleNextPage}
                    color="success"
                >
                    Next
                </Button>
            </div>

        </>
    );
}












