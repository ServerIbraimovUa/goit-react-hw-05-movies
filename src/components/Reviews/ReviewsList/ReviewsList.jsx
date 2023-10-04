import { ListReviews } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <ListReviews>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author: </span>
            <strong>{author}</strong>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ListReviews>
  );
};

export default ReviewsList;
