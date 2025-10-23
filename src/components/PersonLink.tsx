import { Link } from 'react-router-dom';
import { Person } from '../types/Person';

type Props = {
  person: Person;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ person, people }) => {
  const personExists = people.some(p => p.slug === person.slug);

  if (!personExists) {
    return <>{person.name}</>;
  }

  const className = person.sex === 'f' ? 'has-text-danger' : '';

  return (
    <Link to={`/people/${person.slug}`} className={className}>
      {person.name}
    </Link>
  );
};
