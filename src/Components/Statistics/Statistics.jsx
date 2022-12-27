import css from './Statistics.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={clsx(css.item, {
                [css.itemDocx]: label === '.docx',
                [css.itemPdf]: label === '.pdf',
                [css.itemMp3]: label === '.mp3',
                [css.itemPsd]: label === '.psd',
              })}
              key={id}
            >
              <p className={css.label}>{label}</p>
              <p className={css.percentage}>{percentage}%</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
