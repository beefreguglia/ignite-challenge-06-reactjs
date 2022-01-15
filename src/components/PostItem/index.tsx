import { FiCalendar, FiUser } from 'react-icons/fi';

import styles from './postItem.module.scss';

interface PostItemProps {
  post: {
    first_publication_date: string | null;
    data: {
      title: string;
      subtitle: string;
      author: string;
    };
  };
}

export default function PostItem(item: PostItemProps) {
  return (
    <div className={styles.postsContainer}>
      <h1>{item.post.data.title}</h1>
      <p>{item.post.data.subtitle}</p>
      <div className={styles.infoContainer}>
        <div className={styles.calendarContainer}>
          <FiCalendar />
          <p>{item.post.first_publication_date}</p>
        </div>
        <div className={styles.authorContainer}>
          <FiUser />
          <p>{item.post.data?.author}</p>
        </div>
      </div>
    </div>
  );
}
