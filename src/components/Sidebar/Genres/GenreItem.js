import PropTypes from 'prop-types';
import classes from './genres.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setGenreAction} from 'redux/reducers/games/actions.js';

export default function GenreItem({id, name}) {
	const {genre} = useSelector(state => state.games);
	const dispatch = useDispatch();
	
	const handleClick = (e, genre) => {
		e.preventDefault();
		dispatch(setGenreAction(genre.toLowerCase()));
	}

	return (
		<li className={classes.item}>
			<button
				onClick={(e) => handleClick(e, name)}
				className={name.toLowerCase() === genre 
					? `${classes.item__link} ${classes.active}`
					: classes.item__link}
			>{name}</button>
		</li>
	)
}

GenreItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
}