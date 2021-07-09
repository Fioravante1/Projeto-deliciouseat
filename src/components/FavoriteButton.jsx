import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = ({ history }) => {
  const handleClick = () => {
    history.push('/receitas-favoritas');
  };

  return (
    <button
      className="profile__button"
      data-testid="profile-favorite-btn"
      name="favorite"
      onClick={ handleClick }
      type="button"
    >
      Receitas Favoritas
    </button>
  );
};

FavoriteButton.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default FavoriteButton;
